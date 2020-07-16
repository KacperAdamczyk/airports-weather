import { Metar } from 'interfaces/metar';
import { MetarResponse } from 'interfaces/metarResponse';

// ADAPTER
interface MetarTarget {
  getData: () => Metar;
}

export class MetarAdapter implements MetarTarget {
  constructor(private metarResponse: MetarResponse) {}

  getData(): Metar {
    return {};
  }
}
