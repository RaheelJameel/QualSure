import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './university-home/in-memory-data.service';

import { UniversityRoutingModule } from './university-routing.module';
import { QualSureCommonModule } from '../common/common.module';

import { UniversityComponent } from './university.component';
import { UniversityLoginComponent } from './university-login/university-login.component';
import { UniversitySignupComponent } from './university-signup/university-signup.component';
import { UniversityProfileComponent } from './university-profile/university-profile.component';
import { UniversityDegreeAddComponent } from './university-degree-add/university-degree-add.component';

import { DegreeService } from './university-home/degree.service';
import { MessageService } from './university-home/message.service';

@NgModule({
  imports: [
    CommonModule,
    UniversityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QualSureCommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  declarations: [
    UniversityComponent,
    UniversityLoginComponent,
    UniversitySignupComponent,
    UniversityProfileComponent,
    UniversityDegreeAddComponent,
  ],
  providers: [
    DegreeService,
    MessageService,
  ],
})
export class UniversityModule { }
