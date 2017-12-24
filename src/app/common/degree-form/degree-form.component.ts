import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Degree } from './degree';

import { EmptyStringValidator } from '../validators/empty-string';
import { NonNegativeNumberValidator } from '../validators/non-negative-number';

@Component({
  selector: 'app-degree-form',
  templateUrl: './degree-form.component.html',
  styleUrls: ['./degree-form.component.scss']
})
export class DegreeFormComponent implements OnInit {

  @Input() degreeModel: Degree;
  @Input() submitButtonText = 'Submit';
  @Output() degreeOutput: EventEmitter<Degree> = new EventEmitter<Degree>();

  degreeForm: FormGroup;

  formInvalid: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.degreeForm = this.formBuilder.group({
      id: [{
        value: this.degreeModel ? this.degreeModel.id : '',
        disabled: true
      }],
      firstName: [this.degreeModel ? this.degreeModel.firstName : '', [Validators.required, EmptyStringValidator]],
      lastName: [this.degreeModel ? this.degreeModel.lastName : '', [Validators.required, EmptyStringValidator]],
      degreeType: [this.degreeModel ? this.degreeModel.degreeType : '', [Validators.required, EmptyStringValidator]],
      field: [this.degreeModel ? this.degreeModel.field : '', [Validators.required, EmptyStringValidator]],
      gradYear: [this.degreeModel ? this.degreeModel.gradYear : '', [Validators.required, NonNegativeNumberValidator]],
      gpa: [this.degreeModel ? this.degreeModel.gpa : '', [Validators.required, NonNegativeNumberValidator]],
      fatherFirstName: [this.degreeModel ? this.degreeModel.fatherFirstName : '', [Validators.required, EmptyStringValidator]],
      fatherLastName: [this.degreeModel ? this.degreeModel.fatherLastName : '', [Validators.required, EmptyStringValidator]]
    });
  }

  submit() {
    this.formInvalid = false;
    console.log('DegreeFormComponent: Submit called');
    if (this.degreeForm.valid) {
      let formValue: Degree;
      if (this.degreeModel && this.degreeModel.id) {
        formValue = this.degreeForm.getRawValue();
      } else {
        formValue = this.degreeForm.value;
      }
      console.log('DegreeFormComponent: degreeForm Valid; emitting output: ', formValue);
      this.degreeOutput.emit(formValue);
    } else {
      this.formInvalid = true;
    }
  }

}
