import { Injectable } from '@angular/core';
import { Angular2SwapiService } from 'angular2-swapi';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

const DEBOUNCE_TIME = 400;

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _swapi: Angular2SwapiService) {}

  searchFilms(searchStr$: Observable<string>) {
    return searchStr$.pipe(
        debounceTime(DEBOUNCE_TIME),
        distinctUntilChanged(),
        switchMap(searchStr => this._swapi.searchFilms(searchStr))
      );
  }

  searchPeople(searchStr$: Observable<string>) {
    return searchStr$.pipe(
        debounceTime(DEBOUNCE_TIME),
        distinctUntilChanged(),
        switchMap(searchStr => this._swapi.searchPeople(searchStr))
      );
  }

  searchPlanets(searchStr$: Observable<string>) {
    return searchStr$.pipe(
        debounceTime(DEBOUNCE_TIME),
        distinctUntilChanged(),
        switchMap(searchStr => this._swapi.searchPlanets(searchStr))
      );
  }

  searchSpecies(searchStr$: Observable<string>) {
    return searchStr$.pipe(
        debounceTime(DEBOUNCE_TIME),
        distinctUntilChanged(),
        switchMap(searchStr => this._swapi.searchSpecies(searchStr))
      );
  }

  searchStarships(searchStr$: Observable<string>) {
    return searchStr$.pipe(
        debounceTime(DEBOUNCE_TIME),
        distinctUntilChanged(),
        switchMap(searchStr => this._swapi.searchStarships(searchStr))
      );
  }

  searchVehicles(searchStr$: Observable<string>) {
    return searchStr$.pipe(
        debounceTime(DEBOUNCE_TIME),
        distinctUntilChanged(),
        switchMap(searchStr => this._swapi.searchVehicles(searchStr))
      );
  }
}
