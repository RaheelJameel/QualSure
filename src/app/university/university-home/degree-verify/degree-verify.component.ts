import { Component, OnInit } from '@angular/core';

import { Degree } from '../degree';
import { DegreeService } from '../degree.service';

@Component({
  selector: 'app-degree-verify',
  templateUrl: './degree-verify.component.html',
  styleUrls: ['./degree-verify.component.scss']
})
export class DegreeVerifyComponent implements OnInit {

  newDegreeModel: Degree;
  submitted: boolean;
  valid: boolean;
  invalid: boolean;

  constructor(
    private degreeService: DegreeService
  ) { }

  ngOnInit() {
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
