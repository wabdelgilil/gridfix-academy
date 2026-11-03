import GenericExamRunner, { type ExamQuestion } from '../common/GenericExamRunner';
import { quiz01 } from '../../../../data/quiz/cfm/quiz-0-1';
import { quiz02 } from '../../../../data/quiz/cfm/quiz-0-2';
import { quiz03 } from '../../../../data/quiz/cfm/quiz-0-3';
import { quiz11 } from '../../../../data/quiz/cfm/quiz-1-1';
import { quiz12 } from '../../../../data/quiz/cfm/quiz-1-2';
import { quiz13 } from '../../../../data/quiz/cfm/quiz-1-3';
import { quiz14 } from '../../../../data/quiz/cfm/quiz-1-4';
import { quiz21 } from '../../../../data/quiz/cfm/quiz-2-1';
import { quiz22 } from '../../../../data/quiz/cfm/quiz-2-2';
import { quiz23 } from '../../../../data/quiz/cfm/quiz-2-3';
import { quiz31 } from '../../../../data/quiz/cfm/quiz-3-1';
import { quiz32 } from '../../../../data/quiz/cfm/quiz-3-2';
import { quiz33 } from '../../../../data/quiz/cfm/quiz-3-3';
import { quiz34 } from '../../../../data/quiz/cfm/quiz-3-4';
import { quiz41 } from '../../../../data/quiz/cfm/quiz-4-1';
import { quiz42 } from '../../../../data/quiz/cfm/quiz-4-2';
import { quiz43 } from '../../../../data/quiz/cfm/quiz-4-3';
import { quiz51 } from '../../../../data/quiz/cfm/quiz-5-1';
import { quiz52 } from '../../../../data/quiz/cfm/quiz-5-2';
import { quiz53 } from '../../../../data/quiz/cfm/quiz-5-3';
import { quiz61 } from '../../../../data/quiz/cfm/quiz-6-1';
import { quiz62 } from '../../../../data/quiz/cfm/quiz-6-2';
import { quiz63 } from '../../../../data/quiz/cfm/quiz-6-3';
import { quiz71 } from '../../../../data/quiz/cfm/quiz-7-1';
import { quiz72 } from '../../../../data/quiz/cfm/quiz-7-2';
import { quiz73 } from '../../../../data/quiz/cfm/quiz-7-3';
import { quiz81 } from '../../../../data/quiz/cfm/quiz-8-1';
import { quiz82 } from '../../../../data/quiz/cfm/quiz-8-2';
import { quiz83 } from '../../../../data/quiz/cfm/quiz-8-3';
import { quiz91 } from '../../../../data/quiz/cfm/quiz-9-1';
import { quiz92 } from '../../../../data/quiz/cfm/quiz-9-2';
import { quiz93 } from '../../../../data/quiz/cfm/quiz-9-3';
import { quiz101 } from '../../../../data/quiz/cfm/quiz-10-1';
import { quiz102 } from '../../../../data/quiz/cfm/quiz-10-2';
import { quiz111 } from '../../../../data/quiz/cfm/quiz-11-1';
import { quiz112 } from '../../../../data/quiz/cfm/quiz-11-2';
import { quiz113 } from '../../../../data/quiz/cfm/quiz-11-3';

const banks = [
  quiz01, quiz02, quiz03,
  quiz11, quiz12, quiz13, quiz14,
  quiz21, quiz22, quiz23,
  quiz31, quiz32, quiz33, quiz34,
  quiz41, quiz42, quiz43,
  quiz51, quiz52, quiz53,
  quiz61, quiz62, quiz63,
  quiz71, quiz72, quiz73,
  quiz81, quiz82, quiz83,
  quiz91, quiz92, quiz93,
  quiz101, quiz102,
  quiz111, quiz112, quiz113,
];

const stationNames: Record<number, string> = {
  0: 'مقدمة وترخيص CFM',
  1: 'التشغيل والصيانة',
  2: 'العقارات والمساحات',
  3: 'الأعمال المالية',
  4: 'الرفاهية وبيئة العمل',
  5: 'السلامة والأمن',
  6: 'الطوارئ والاستمرارية',
  7: 'الاستدامة',
  8: 'القيادة والاستراتيجية',
  9: 'البيانات والتقنية',
  10: 'الجودة',
  11: 'إدارة المشاريع',
};

const stationNamesEn: Record<number, string> = {
  0: 'CFM Intro & Licensing',
  1: 'Operations & Maintenance',
  2: 'Real Estate & Space',
  3: 'Financial Management',
  4: 'Work Environment & HR',
  5: 'Safety & Security',
  6: 'Emergency & Continuity',
  7: 'Sustainability',
  8: 'Leadership & Strategy',
  9: 'Data & Technology',
  10: 'Quality',
  11: 'Project Management',
};

const sections = Object.entries(stationNames).map(([idStr, name]) => {
  const id = Number(idStr);
  return {
    id,
    name,
    nameEn: stationNamesEn[id] ?? name,
  };
});

const questions: ExamQuestion[] = banks.flatMap((b) => {
  const st = Number(String(b.id).replace('quiz-', '').split('-')[0]);
  return b.questions.map((q) => ({
    scenario: q.scenario,
    scenarioEn: q.scenarioEn,
    question: q.question,
    questionEn: q.questionEn,
    difficulty: q.difficulty as 'سهل' | 'متوسط' | 'صعب',
    options: q.options.map((opt) => ({
      text: opt.text,
      textEn: opt.textEn,
      isCorrect: opt.isCorrect,
      explanation: opt.explanation,
      explanationEn: opt.explanationEn,
    })),
    sectionId: st,
  }));
});

export default function MockExam() {
  return (
    <GenericExamRunner
      examCode="CFM"
      examTitle="محاكي امتحان CFM الشامل"
      examTitleEn="CFM Comprehensive Mock Exam"
      examDescription="أسئلة من مواقف حقيقية توزع على أركان المنهج، بمؤقت يحاكي إيقاع الامتحان (90 ثانية للسؤال). اجمع 70% أو أكثر لتهيئة جاهزة للاختبار الفعلي."
      examDescriptionEn="Real scenario questions distributed across CFM competencies with a timer mimicking the exam pace (90 seconds per question). Score 70% or more to be ready for the real test."
      sectionLabel="المحطة"
      sectionLabelEn="Station"
      questions={questions}
      sections={sections}
      countOptions={[10, 15, 20, 50]}
      defaultCount={15}
      secondsPerQuestion={90}
      storageCourseId="cfm"
    />
  );
}
