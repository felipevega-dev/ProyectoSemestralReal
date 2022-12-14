import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asistencia3Page } from './asistencia3.page';

const routes: Routes = [
  {
    path: '',
    component: Asistencia3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asistencia3PageRoutingModule {}
