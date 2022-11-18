import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asistencia4Page } from './asistencia4.page';

const routes: Routes = [
  {
    path: '',
    component: Asistencia4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asistencia4PageRoutingModule {}
