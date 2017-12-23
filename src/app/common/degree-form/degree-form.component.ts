import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Degree } from './degree';

@Component({
  selector: 'app-degree-form',
  templateUrl: './degree-form.component.html',
  styleUrls: ['./degree-form.component.scss']
})
export class DegreeFormComponent implements OnInit {

  @Input() degreeModel: Degree;
  @Output() degreeOutput: EventEmitter<Degree> = new EventEmitter<Degree>();

  degreeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.degreeForm = this.formBuilder.group({
      firstName: [this.degreeModel ? this.degreeModel.firstName : '', Validators.required],
      lastName: [this.degreeModel ? this.degreeModel.lastName : '', Validators.required],
      degreeType: [this.degreeModel ? this.degreeModel.degreeType : '', Validators.required],
      field: [this.degreeModel ? this.degreeModel.field : '', Validators.required],
      gradYear: [this.degreeModel ? this.degreeModel.gradYear : '', Validators.required],
      gpa: [this.degreeModel ? this.degreeModel.gpa : '', Validators.required],
      fatherFirstName: [this.degreeModel ? this.degreeModel.fatherFirstName : '', Validators.required],
      fatherLastName: [this.degreeModel ? this.degreeModel.fatherLastName : '', Validators.required]
    });
  }

  submit() {
    console.log('DegreeFormComponent: Submit called');
    if (this.degreeForm.valid) {
      console.log('DegreeFormComponent: degreeForm Valid; emitting output');
      this.degreeOutput.emit(this.degreeForm.value);
    }
  }

}
