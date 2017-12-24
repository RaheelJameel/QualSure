import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityHomeComponent } from './university-home.component';
import { UniversityDegreeAddComponent } from './university-degree-add/university-degree-add.component';

import { DegreeDetailComponent } from './degree-detail/degree-detail.component';
import { DegreesComponent } from './degrees/degrees.component';
import { DegreeVerifyComponent } from './degree-verify/degree-verify.component';

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
        path: 'degrees',
        component: DegreesComponent
      },
      {
        path: 'addNewDegree',
        component: UniversityDegreeAddComponent
      },
      {
        path: 'detail/:id',
        component: DegreeDetailComponent
      },
      {
        path: 'verify',
        component: DegreeVerifyComponent
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
