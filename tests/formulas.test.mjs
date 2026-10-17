import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  presentValue,
  calculateLCC,
  calculateMTBF,
  calculateMTTR,
  calculateAvailability,
  calculateOEE,
  calculateEUI,
  evaluateExamScore,
} from '../src/lib/formulas.ts';

describe('Engineering & Financial Formulas (TDD Suite)', () => {
  describe('presentValue (PV)', () => {
    test('calculates correct discounted amount', () => {
      // 1000 discounted at 10% after 1 year should be 1000 / 1.10 = 909.09
      const pv = presentValue(1000, 10, 1);
      assert.ok(Math.abs(pv - 909.09) < 0.1);
    });

    test('returns exact amount for year 0', () => {
      assert.equal(presentValue(5000, 8, 0), 5000);
    });

    test('throws on negative discount rate', () => {
      assert.throws(() => presentValue(1000, -5, 1), /Discount rate cannot be negative/);
    });
  });

  describe('calculateLCC', () => {
    test('calculates life cycle cost accurately', () => {
      const optionA = {
        initial: 100000,
        annual: 10000,
        life: 5,
        escalate: 3,
      };
      const lcc = calculateLCC(optionA, 8, 10);
      assert.ok(lcc > 100000);
      assert.ok(Number.isInteger(lcc));
    });
  });

  describe('Reliability Metrics: MTBF, MTTR, Availability, OEE', () => {
    test('calculates MTBF accurately', () => {
      // 1000 operating hours with 5 failures -> MTBF = 200 hours
      assert.equal(calculateMTBF(1000, 5), 200);
    });

    test('handles zero failures safely in MTBF', () => {
      assert.equal(calculateMTBF(1000, 0), 1000);
    });

    test('calculates MTTR accurately', () => {
      // 20 downtime hours with 4 failures -> MTTR = 5 hours
      assert.equal(calculateMTTR(20, 4), 5);
    });

    test('calculates Availability accurately', () => {
      // MTBF = 190 hrs, MTTR = 10 hrs -> 190 / 200 = 95.00%
      assert.equal(calculateAvailability(190, 10), 95);
    });

    test('calculates OEE accurately', () => {
      // 90% Availability, 80% Performance, 95% Quality -> 0.9 * 0.8 * 0.95 = 68.4%
      assert.equal(calculateOEE(90, 80, 95), 68.4);
    });
  });

  describe('Energy Management: calculateEUI', () => {
    test('calculates EUI in kWh/m²', () => {
      // 150,000 kWh / 1,000 m² = 150 kWh/m²
      assert.equal(calculateEUI(150000, 1000), 150);
    });

    test('throws if area is zero or negative', () => {
      assert.throws(() => calculateEUI(150000, 0), /Area must be greater than zero/);
    });
  });

  describe('Exam Scoring: evaluateExamScore', () => {
    test('determines passing score at or above 70%', () => {
      const result75 = evaluateExamScore(75, 100);
      assert.equal(result75.percentage, 75);
      assert.equal(result75.passed, true);

      const result70 = evaluateExamScore(70, 100);
      assert.equal(result70.passed, true);
    });

    test('determines failing score below 70%', () => {
      const result69 = evaluateExamScore(69, 100);
      assert.equal(result69.percentage, 69);
      assert.equal(result69.passed, false);
    });

    test('handles empty questions safely', () => {
      const resultEmpty = evaluateExamScore(0, 0);
      assert.equal(resultEmpty.percentage, 0);
      assert.equal(resultEmpty.passed, false);
    });
  });
});
