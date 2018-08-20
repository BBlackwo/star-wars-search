import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SearchService } from './search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private types = [
    { label: 'Films', fn: this.searchService.searchFilms.bind(this.searchService) },
    { label: 'People', fn: this.searchService.searchPeople.bind(this.searchService) },
    { label: 'Planets', fn: this.searchService.searchPlanets.bind(this.searchService) },
    { label: 'Species', fn: this.searchService.searchSpecies.bind(this.searchService) },
    { label: 'Starships', fn: this.searchService.searchStarships.bind(this.searchService) },
    { label: 'Vehicles', fn: this.searchService.searchVehicles.bind(this.searchService) },
  ];
  private searchFn: Function;
  private searchTerm$ = new Subject<string>();
  private data$: Observable<any>;

  constructor(
    private searchService: SearchService
  ) {}

  ngOnInit() {

  }

  onTypeChange() {
    this.data$ = this.searchFn(this.searchTerm$);
  }

}
