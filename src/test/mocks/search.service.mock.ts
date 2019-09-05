import { of, Observable } from 'rxjs';

export class SearchServiceMock {

  searchFilms(searchStr$: Observable<string>) {
    return of(undefined);
  }

  searchPeople(searchStr$: Observable<string>) {
    return of(undefined);
  }

  searchPlanets(searchStr$: Observable<string>) {
    return of(undefined);
  }

  searchSpecies(searchStr$: Observable<string>) {
    return of(undefined);
  }

  searchStarships(searchStr$: Observable<string>) {
    return of(undefined);
  }

  searchVehicles(searchStr$: Observable<string>) {
    return of(undefined);
  }
}
