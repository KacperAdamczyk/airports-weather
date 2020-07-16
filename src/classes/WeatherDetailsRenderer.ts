import { RenderStrategy } from 'interfaces/RenderStrategy';
import { Metar } from 'interfaces/metar';
import { Taf } from 'interfaces/taf';

// STRATEGY
export class WeatherDetailsRenderer {
  private renderStrategy: RenderStrategy | null = null;

  setStrategy(renderStrategy: RenderStrategy) {
    this.renderStrategy = renderStrategy;
  }

  executeStrategy(metar: Metar, taf: Taf) {
    return this.renderStrategy?.render(metar, taf);
  }
}
