import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Stepan' },
  { id: 13, name: 'Hello' },
  { id: 14, name: 'How R U' },
  { id: 15, name: 'Thank You' },
  { id: 16, name: 'Nice' },
  { id: 17, name: 'Person' },
  { id: 18, name: 'Dr. Stepan' },
  { id: 19, name: 'Feeling Great' },
  { id: 20, name: 'On You' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
