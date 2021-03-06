import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Degree } from '../common/degree-form/degree';
import { DegreeService } from '../university/university-home/degree.service';

@Component({
  selector: 'app-degree-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  newDegreeModel: Degree;
  submitted: boolean;
  valid: boolean;
  invalid: boolean;

  initDegreeModel: Degree;

  constructor(
    private degreeService: DegreeService,
    private location: Location

  ) { }

  ngOnInit() {
    this.initData();

  }

  private initData() {
    // TODO: implement this with a call to service
  }

  goBack(): void {
    this.location.back();
  }

  formSubmit(degreeModel: Degree) {
    this.submitted = true;
    /*
    degreeModel = {
      firstName: 'Alpha',
      lastName: 'Bravo',
      degreeType: 'BS',
      field: 'CS',
      gradYear: 2018,
      gpa: 3.5,
      fatherFirstName: 'Charlie',
      fatherLastName: 'Khan'
    };
    */
    console.log('DegreeVerifyComponent: formSubmit called with degree->', degreeModel);
    this.newDegreeModel = degreeModel;
    this.degreeService.searchExactDegree(this.newDegreeModel)
        .subscribe((value: Degree[]) => {
          if (value.length) {
            this.valid = true;
          } else {
            this.invalid = true;
          }
        });
  }
}
