import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRPageRoutingModule } from './qr-routing.module';

import { QRPage } from './qr.page';
import { QRCodeModule } from 'angularx-qrcode';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRPageRoutingModule,
    QRCodeModule,
    ComponentsModule
  ],
  declarations: [QRPage]
})
export class QRPageModule {}
