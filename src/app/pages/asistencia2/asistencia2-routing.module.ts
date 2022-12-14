import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asistencia2Page } from './asistencia2.page';

const routes: Routes = [
  {
    path: '',
    component: Asistencia2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asistencia2PageRoutingModule {}
