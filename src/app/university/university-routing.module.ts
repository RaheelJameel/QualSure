import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityComponent } from './university.component';
import { UniversityHomeComponent } from './university-home/university-home.component';
import { UniversityLoginComponent } from './university-login/university-login.component';
import { UniversitySignupComponent } from './university-signup/university-signup.component';
import { UniversityProfileComponent } from './university-profile/university-profile.component';

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
