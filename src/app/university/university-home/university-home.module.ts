import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './university-home-routing.module';

import { UniversityHomeComponent } from './university-home.component';
import { DegreeDetailComponent } from './degree-detail/degree-detail.component';
import { UniversityDegreeAddComponent } from './university-degree-add/university-degree-add.component';
import { DegreeFormComponent } from '../../common/degree-form/degree-form.component';

import { DegreeSearchComponent } from './degree-search/degree-search.component';
import { DegreesComponent } from './degrees/degrees.component';
import { DegreeService } from './degree.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UniversityHomeComponent,
    DegreeFormComponent,
    UniversityDegreeAddComponent,
    DegreesComponent,
    DegreeDetailComponent,
    DegreeSearchComponent,
    MessagesComponent,
  ],
  providers: [ DegreeService, MessageService ],
})
export class UniversityHomeModule { }
