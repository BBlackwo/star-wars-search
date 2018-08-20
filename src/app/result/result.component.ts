import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  template: `
  <div *ngIf="!data">
    {{ SEARCHING_TEXT }}
  </div>
  <pre *ngIf="data">
    {{ data | json }}
  </pre>
  `,
  styles: []
})
export class ResultComponent implements OnChanges {

  private readonly SEARCHING_TEXT = 'Searching...';
  private data = this.SEARCHING_TEXT;

  @Input() data$: Observable<any>;

  constructor() { }

  ngOnChanges() {
    this.data$ && this.data$.subscribe((data) => this.data = data);
  }

}
