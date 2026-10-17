import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  storageKeyFor,
  isLessonComplete,
  toggleLessonComplete,
  recordQuizScore,
  recordMockExamScore,
  calculateCourseProgress,
  isCourseComplete,
  toggleBookmark,
  isBookmarked,
} from '../src/lib/storage.ts';

describe('Storage & Progress Engine (TDD Suite)', () => {
  describe('storageKeyFor', () => {
    test('generates correct namespaced keys for each course', () => {
      assert.equal(storageKeyFor('cfm'), 'cfm-course-progress@v1');
      assert.equal(storageKeyFor('cmrp'), 'cmrp-course-progress@v1');
      assert.equal(storageKeyFor('cama'), 'cama-course-progress@v1');
    });
  });

  describe('Lesson Completion Logic', () => {
    test('toggles lesson from incomplete to complete', () => {
      const state = { completedLessons: [], quizScores: {}, bookmarks: [] };
      const updated = toggleLessonComplete(state, 'lesson-1-1');

      assert.equal(isLessonComplete(updated, 'lesson-1-1'), true);
      assert.deepEqual(updated.completedLessons, ['lesson-1-1']);
    });

    test('toggles lesson from complete back to incomplete', () => {
      const state = { completedLessons: ['lesson-1-1', 'lesson-1-2'], quizScores: {}, bookmarks: [] };
      const updated = toggleLessonComplete(state, 'lesson-1-1');

      assert.equal(isLessonComplete(updated, 'lesson-1-1'), false);
      assert.deepEqual(updated.completedLessons, ['lesson-1-2']);
    });
  });

  describe('Quiz Scoring Logic', () => {
    test('records quiz score and timestamp correctly', () => {
      const state = { completedLessons: [], quizScores: {}, bookmarks: [] };
      const updated = recordQuizScore(state, 'quiz-1-1', 4, 5);

      assert.ok(updated.quizScores['quiz-1-1']);
      assert.equal(updated.quizScores['quiz-1-1'].score, 4);
      assert.equal(updated.quizScores['quiz-1-1'].total, 5);
      assert.ok(updated.quizScores['quiz-1-1'].completedAt);
    });

    test('updates previous quiz score', () => {
      const state = {
        completedLessons: [],
        quizScores: {
          'quiz-1-1': { score: 2, total: 5, completedAt: '2026-01-01T00:00:00.000Z' },
        },
        bookmarks: [],
      };
      const updated = recordQuizScore(state, 'quiz-1-1', 5, 5);
      assert.equal(updated.quizScores['quiz-1-1'].score, 5);
    });
  });

  describe('Mock Exam Recording', () => {
    test('records mock exam percentage, breakdown, and pass state', () => {
      const state = { completedLessons: [], quizScores: {}, bookmarks: [] };
      const breakdown = { 1: 85, 2: 70, 3: 90 };
      const updated = recordMockExamScore(state, 82, breakdown, true);

      assert.ok(updated.mockExam);
      assert.equal(updated.mockExam.percentage, 82);
      assert.equal(updated.mockExam.passed, true);
      assert.deepEqual(updated.mockExam.pillarBreakdown, breakdown);
    });
  });

  describe('Course Progress Calculation', () => {
    test('calculates correct completion percentage', () => {
      const state = {
        completedLessons: ['l-1', 'l-2', 'l-3'],
        quizScores: {},
        bookmarks: [],
      };
      // 3 completed out of 10 total = 30%
      assert.equal(calculateCourseProgress(state, 10), 30);
    });

    test('handles zero total lessons gracefully', () => {
      const state = { completedLessons: [], quizScores: {}, bookmarks: [] };
      assert.equal(calculateCourseProgress(state, 0), 0);
    });

    test('determines course completion', () => {
      const state = {
        completedLessons: ['l-1', 'l-2'],
        quizScores: {},
        bookmarks: [],
      };
      assert.equal(isCourseComplete(state, 2), true);
      assert.equal(isCourseComplete(state, 3), false);
    });
  });

  describe('Bookmarks Logic', () => {
    test('toggles bookmark on and off', () => {
      const state = { completedLessons: [], quizScores: {}, bookmarks: [] };
      const bookmarked = toggleBookmark(state, 'lesson-0-1');
      assert.equal(isBookmarked(bookmarked, 'lesson-0-1'), true);

      const unbookmarked = toggleBookmark(bookmarked, 'lesson-0-1');
      assert.equal(isBookmarked(unbookmarked, 'lesson-0-1'), false);
    });
  });
});
