import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanerPage } from './scaner.page';

const routes: Routes = [
  {
    path: '',
    component: ScanerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanerPageRoutingModule {}
