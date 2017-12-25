import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Degree } from '../../../common/degree-form/degree';
import { DegreeService } from '../degree.service';


@Component({
  selector: 'app-uni-degree-add',
  templateUrl: './university-degree-add.component.html',
  styleUrls: ['./university-degree-add.component.scss']
})
export class UniversityDegreeAddComponent implements OnInit {

  submitted: boolean;

  initDegreeModel: Degree;
  newDegreeModel: Degree;

  constructor(
    private degreeService: DegreeService,
    private location: Location
    ) { }

  ngOnInit() {
    this.initData();
  }

  private initData() {
    // TODO: implement this with a call to service
    this.initDegreeModel = {
      firstName: 'Razer',
      lastName: 'Mantis',
      degreeType: 'BS',
      field: 'CS',
      gradYear: 2018,
      gpa: 3.0,
      fatherFirstName: 'Lenovo',
      fatherLastName: 'Apple'
    };
  }

  goBack(): void {
    this.location.back();
  }

  formSubmit(degreeModel: Degree) {
    this.submitted = true;
    console.log('UniversityDegreeAddComponent: formSubmit called with degree->', degreeModel);
    this.newDegreeModel = degreeModel;
    this.degreeService.addDegree(this.newDegreeModel).subscribe(() => this.goBack());
  }

}
