import { sources as cfmSources, type Source } from './cfm';
import { cmrpSources } from './cmrp';
import { camaSources } from './cama';
import { pmpSources } from './pmp';

export type { Source };

export const sources: Record<string, Source> = {
  ...cfmSources,
  ...cmrpSources,
  ...camaSources,
  ...pmpSources,
};
