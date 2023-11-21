// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIComponent } from './ui/ui.component';
import { StddevComponent } from './stddev/stddev.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { SimpsonComponent } from './simpson/simpson.component';

const routes: Routes = [
  {
    path: 'desviacion',
    component: StddevComponent
  },
  {
    path: 'linear-regression',
    component: LinearRegressionComponent
  },
  {
    path: 'simpson',
    component: SimpsonComponent
  },
  {
    path: '',
    redirectTo: '/desviacion',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
