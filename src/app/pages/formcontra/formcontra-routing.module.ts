import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormcontraPage } from './formcontra.page';

const routes: Routes = [
  {
    path: '',
    component: FormcontraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormcontraPageRoutingModule {}
