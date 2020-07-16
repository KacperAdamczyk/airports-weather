import { Taf } from 'interfaces/taf';
import { TafResponse } from 'interfaces/tafResponse';

// ADAPTER
interface TafTarget {
  getData: () => Taf;
}

export class TafAdapter implements TafTarget {
  constructor(private tafResponse: TafResponse) {}

  getData(): Taf {
    return {};
  }
}
