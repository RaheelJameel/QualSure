import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './university-home-routing.module';

import { UniversityHomeComponent } from './university-home.component';
import { DegreeDetailComponent } from './degree-detail/degree-detail.component';
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
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    UniversityHomeComponent,
    DegreesComponent,
    DegreeDetailComponent,
    DegreeSearchComponent,
    MessagesComponent
  ],
  providers: [ DegreeService, MessageService ],
})
export class UniversityHomeModule { }
