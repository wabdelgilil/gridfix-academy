import { glossary as cfmGlossary, type GlossaryTerm } from './cfm';
import { cmrpGlossary } from './cmrp';
import { camaGlossary } from './cama';
import { pmpGlossary } from './pmp';

export type { GlossaryTerm };

export const glossary: GlossaryTerm[] = [
  ...cfmGlossary,
  ...cmrpGlossary,
  ...camaGlossary,
  ...pmpGlossary,
];

export function getGlossaryForCourse(course: string): GlossaryTerm[] {
  return glossary.filter((g) => (g.course ?? 'cfm') === course);
}
