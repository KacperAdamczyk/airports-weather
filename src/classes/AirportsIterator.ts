import { Airport } from 'interfaces';
import { AirportsCollection } from './AirportsCollection';

// ITERATOR
export interface IIterator {
  getNext(): Airport;
  hasMore(): boolean;
}

export class AirportIterator implements IIterator {
  private position: number = 0;

  constructor(private collection: AirportsCollection) {}

  getNext() {
    const items = this.collection.getItems();

    return items[this.position++];
  }

  hasMore() {
    return this.collection.getItems().length > this.position;
  }
}
