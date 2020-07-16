import React from 'react';

import { RenderStrategy } from 'interfaces/RenderStrategy';
import { Metar } from 'interfaces/metar';
import { Taf } from 'interfaces/taf';

export class RenderTafStrategy implements RenderStrategy {
  render(metar: Metar, taf: Taf) {
    return <div>Taf</div>;
  }
}
