import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityComponent } from './university.component';
import { UniversityHomeComponent } from './university-home/university-home.component';

const routes: Routes = [
  {
    path: '',
    component: UniversityComponent,
    children: [
      {
        path: '',
        loadChildren: './university-home/university-home.module#UniversityHomeModule'
      },
      /*
      {
        path: 'login',
        component: UniversityLoginComponent
      },
      */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule {
}
