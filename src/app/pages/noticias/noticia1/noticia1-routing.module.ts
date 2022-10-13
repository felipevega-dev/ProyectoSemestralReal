import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Noticia1Page } from './noticia1.page';

const routes: Routes = [
  {
    path: '',
    component: Noticia1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Noticia1PageRoutingModule {}
