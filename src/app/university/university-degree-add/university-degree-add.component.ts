import { Component, OnInit } from '@angular/core';

import { Degree } from '../../common/degree-form/degree';
import { DegreeService } from '../university-home/degree.service';

@Component({
  selector: 'app-uni-degree-add',
  templateUrl: './university-degree-add.component.html',
  styleUrls: ['./university-degree-add.component.scss']
})
export class UniversityDegreeAddComponent implements OnInit {

  initDegreeModel: Degree;
  newDegreeModel: Degree;

  constructor(
    private degreeService: DegreeService,
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

  formSubmit(degreeModel: Degree) {
    console.log('UniversityDegreeAddComponent: formSubmit called with degree->', degreeModel);
    this.newDegreeModel = degreeModel;
    this.degreeService.addDegree(this.newDegreeModel)
        .subscribe(() => {
          alert('Done');
        });
  }

}
