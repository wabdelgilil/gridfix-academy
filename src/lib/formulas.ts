/**
 * Core Engineering & Financial Formulas for GridFix Academy (CFM, CMRP, CAMA)
 * Fully tested via automated unit tests (TDD).
 */

/**
 * Net Present Value (PV) calculation for a future amount.
 * PV = amount / (1 + rate / 100)^year
 */
export function presentValue(amount: number, discountRate: number, year: number): number {
  if (discountRate < 0) throw new Error('Discount rate cannot be negative');
  if (year < 0) throw new Error('Year cannot be negative');
  return amount / Math.pow(1 + discountRate / 100, year);
}

export interface LCCOption {
  initial: number;
  annual: number;
  life: number;
  escalate: number;
}

/**
 * Calculates Life Cycle Cost (LCC) discounted over a horizon.
 */
export function calculateLCC(option: LCCOption, discountRate: number, horizon: number = 12): number {
  if (horizon <= 0) throw new Error('Horizon must be positive');
  let total = option.initial;
  for (let year = 1; year <= horizon; year++) {
    const operatingCost = option.annual * Math.pow(1 + option.escalate / 100, year - 1);
    total += presentValue(operatingCost, discountRate, year);
    if (year % option.life === 0 && year < horizon) {
      total += presentValue(option.initial, discountRate, year);
    }
  }
  return Math.round(total);
}

/**
 * Mean Time Between Failures (MTBF) in hours
 * MTBF = (Total Operating Time) / Failures Count
 */
export function calculateMTBF(operatingHours: number, failures: number): number {
  if (failures <= 0) return operatingHours;
  return Number((operatingHours / failures).toFixed(2));
}

/**
 * Mean Time To Repair (MTTR) in hours
 * MTTR = (Total Downtime Hours) / Failures Count
 */
export function calculateMTTR(downtimeHours: number, failures: number): number {
  if (failures <= 0) return 0;
  return Number((downtimeHours / failures).toFixed(2));
}

/**
 * Inherent Availability (A_i) percentage
 * Availability = (MTBF / (MTBF + MTTR)) * 100
 */
export function calculateAvailability(mtbf: number, mttr: number): number {
  if (mtbf + mttr === 0) return 0;
  const ratio = (mtbf / (mtbf + mttr)) * 100;
  return Number(ratio.toFixed(2));
}

/**
 * Overall Equipment Effectiveness (OEE) percentage
 * OEE = Availability * Performance * Quality (all passed as percentages 0-100 or fractions 0-1)
 */
export function calculateOEE(availabilityPct: number, performancePct: number, qualityPct: number): number {
  const oee = (availabilityPct / 100) * (performancePct / 100) * (qualityPct / 100) * 100;
  return Number(oee.toFixed(2));
}

/**
 * Energy Use Intensity (EUI)
 * EUI = Annual Energy Consumption / Total Gross Area
 */
export function calculateEUI(totalEnergyKwh: number, areaSqM: number): number {
  if (areaSqM <= 0) throw new Error('Area must be greater than zero');
  return Number((totalEnergyKwh / areaSqM).toFixed(2));
}

/**
 * Exam Pass / Score calculator
 * Standard IFMA / SMRP threshold is 70%
 */
export function evaluateExamScore(score: number, total: number, passingThresholdPct: number = 70): {
  percentage: number;
  passed: boolean;
} {
  if (total <= 0) return { percentage: 0, passed: false };
  const percentage = Math.round((score / total) * 100);
  return {
    percentage,
    passed: percentage >= passingThresholdPct,
  };
}
