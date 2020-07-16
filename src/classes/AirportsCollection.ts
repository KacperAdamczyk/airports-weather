import { Airport } from 'interfaces';
import { IIterator, AirportIterator } from './AirportsIterator';

interface Collection {
  createIterator(): IIterator;
  getItems(): Airport[];
  getCount(): number;
}

export class AirportsCollection implements Collection {
  constructor(private items: Airport[]) {}

  public getItems(): Airport[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public createIterator(): IIterator {
    return new AirportIterator(this);
  }
}
