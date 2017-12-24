import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityComponent } from './university.component';
import { UniversityHomeComponent } from './university-home/university-home.component';
import { UniversityLoginComponent } from './university-login/university-login.component';
import { UniversitySignupComponent } from './university-signup/university-signup.component';
import { UniversityProfileComponent } from './university-profile/university-profile.component';
import { UniversityDegreeAddComponent } from './university-degree-add/university-degree-add.component';

const routes: Routes = [
  {
    path: '',
    component: UniversityComponent,
    children: [
      {
        path: '',
        loadChildren: './university-home/university-home.module#UniversityHomeModule'
      },
      {
        path: 'home',
        loadChildren: './university-home/university-home.module#UniversityHomeModule'
      },
      {
        path: 'login',
        component: UniversityLoginComponent
      },
      {
        path: 'signup',
        component: UniversitySignupComponent
      },
      {
        path: 'profile',
        component: UniversityProfileComponent
      },
      {
        path: 'add',
        component: UniversityDegreeAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule {
}
