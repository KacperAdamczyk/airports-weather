import { ReactElement } from 'react';

import { Metar } from './metar';
import { Taf } from './taf';

export interface RenderStrategy {
  render(metar: Metar, taf: Taf): ReactElement | null;
}
