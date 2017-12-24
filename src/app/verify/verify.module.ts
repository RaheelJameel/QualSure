import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DegreeService } from '../university/university-home/degree.service';
import { HttpClientModule } from '@angular/common/http';
import { Degree1FormComponent } from '../common/degree1-form/degree1-form.component';
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
    Degree1FormComponent
  ],
  providers: [ DegreeService, MessageService]
})
export class VerifyModule { }
