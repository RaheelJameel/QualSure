import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DegreeService } from '../university/university-home/degree.service';
import { HttpClientModule } from '@angular/common/http';
import { DegreeFormComponent } from '../common/degree-form/degree-form.component';
import { MessageService } from '../university/university-home/message.service';

import { VerifyRoutingModule } from './verify-routing.module';
import { VerifyComponent } from './verify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VerifyRoutingModule,
    HttpClientModule
  ],
  declarations: [
    VerifyComponent,
    DegreeFormComponent
  ],
  providers: [ DegreeService, MessageService]
})
export class VerifyModule { }
