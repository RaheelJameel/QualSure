import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

 import { Degree } from '../degree';
 import { DegreeService } from '../degree.service';
 

@Component({
  selector: 'app-degree-search',
  templateUrl: './degree-search.component.html',
  styleUrls: [ './degree-search.component.css' ]
})
export class DegreeSearchComponent implements OnInit {
  degrees$: Observable<Degree[]>;
  private searchTerms = new Subject<string>();

  constructor(private degreeService: DegreeService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.degrees$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.degreeService.searchDegrees(term)),
    );
  }
}
