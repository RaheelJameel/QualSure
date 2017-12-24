import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UniversityRoutingModule } from './university-routing.module';

import { UniversityComponent } from './university.component';

@NgModule({
  imports: [
    CommonModule,
    UniversityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UniversityComponent,
  ],
  })
export class UniversityModule { }
