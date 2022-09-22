import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContraPage } from './contra.page';

const routes: Routes = [
  {
    path: '',
    component: ContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContraPageRoutingModule {}
