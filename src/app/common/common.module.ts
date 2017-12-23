import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DegreeFormComponent } from './degree-form/degree-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DegreeFormComponent
  ],
  exports: [
    DegreeFormComponent
  ]
})
export class QualSureCommonModule { }
