import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Noticia2Page } from './noticia2.page';

const routes: Routes = [
  {
    path: '',
    component: Noticia2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Noticia2PageRoutingModule {}
