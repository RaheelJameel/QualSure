import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Degree } from '../degree';
import { DegreeService } from '../degree.service';


@Component({
  selector: 'app-degree-detail',
  templateUrl: './degree-detail.component.html',
  styleUrls: [ './degree-detail.component.css' ]
})
export class DegreeDetailComponent implements OnInit {
  @Input() degree: Degree;

  submitted: boolean;

  constructor(
    private route: ActivatedRoute,
    private degreeService: DegreeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDegree();
  }

  getDegree(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.degreeService.getDegree(id)
      .subscribe(degree => this.degree = degree);
  }

  goBack(): void {
    this.location.back();
  }

 save(degreeModel?: Degree): void {
   this.submitted = true;
   if (degreeModel) {
    this.degree = degreeModel;
   }
    this.degreeService.updateDegree(this.degree)
      .subscribe(() => this.goBack());
  }
}
