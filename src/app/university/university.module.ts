import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UniversityRoutingModule } from './university-routing.module';
import { QualSureCommonModule } from '../common/common.module';

import { UniversityComponent } from './university.component';
import { UniversityHomeComponent } from './university-home/university-home.component';
import { UniversityLoginComponent } from './university-login/university-login.component';
import { UniversitySignupComponent } from './university-signup/university-signup.component';
import { UniversityProfileComponent } from './university-profile/university-profile.component';
import { UniversityDegreeAddComponent } from './university-degree-add/university-degree-add.component';

@NgModule({
  imports: [
    CommonModule,
    UniversityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QualSureCommonModule
  ],
  declarations: [
    UniversityComponent,
    UniversityHomeComponent,
    UniversityLoginComponent,
    UniversitySignupComponent,
    UniversityProfileComponent,
    UniversityDegreeAddComponent
  ]
})
export class UniversityModule { }
