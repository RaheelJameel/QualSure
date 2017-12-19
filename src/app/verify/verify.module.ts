import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VerifyRoutingModule } from './verify-routing.module';
import { VerifyComponent } from './verify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VerifyRoutingModule
  ],
  declarations: [
    VerifyComponent
  ]
})
export class VerifyModule { }
