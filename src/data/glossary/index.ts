import { glossary as cfmGlossary, type GlossaryTerm } from './cfm';
import { cmrpGlossary } from './cmrp';
import { camaGlossary } from './cama';

export type { GlossaryTerm };

export const glossary: GlossaryTerm[] = [...cfmGlossary, ...cmrpGlossary, ...camaGlossary];

export function getGlossaryForCourse(course: string): GlossaryTerm[] {
  return glossary.filter((g) => (g.course ?? 'cfm') === course);
}