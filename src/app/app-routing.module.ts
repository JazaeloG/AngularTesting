
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIComponent } from './ui/ui.component';
import { StddevComponent } from './stddev/stddev.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

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
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppRoutingModule { }