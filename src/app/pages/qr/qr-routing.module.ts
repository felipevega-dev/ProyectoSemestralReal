import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QRPage } from './qr.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: QRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ComponentsModule,],
  exports: [RouterModule],
})
export class QRPageRoutingModule {}
