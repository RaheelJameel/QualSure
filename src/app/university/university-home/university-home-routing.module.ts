import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityHomeComponent } from './university-home.component';

import { DegreeDetailComponent } from './degree-detail/degree-detail.component';
import { DegreesComponent } from './degrees/degrees.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/degrees', pathMatch: 'full' },
//   { path: 'detail/:id', component: DegreeDetailComponent },
//   { path: 'degrees', component: DegreesComponent }
// ];

const routes: Routes = [
  {
    path: '',
    component: UniversityHomeComponent,
    children: [
      {
        path: '',
      },
      {
        path: 'degrees',
        component: DegreesComponent
      },
      {
        path: 'detail/:id',
        component: DegreeDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
