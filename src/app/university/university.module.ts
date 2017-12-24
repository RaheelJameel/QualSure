import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UniversityRoutingModule } from './university-routing.module';

import { UniversityComponent } from './university.component';
import { UniversityLoginComponent } from './university-login/university-login.component';
import { UniversitySignupComponent } from './university-signup/university-signup.component';
import { UniversityProfileComponent } from './university-profile/university-profile.component';

@NgModule({
  imports: [
    CommonModule,
    UniversityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UniversityComponent,
    UniversityLoginComponent,
    UniversitySignupComponent,
    UniversityProfileComponent
  ],
  })
export class UniversityModule { }
