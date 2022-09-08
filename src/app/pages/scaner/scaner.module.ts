import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanerPageRoutingModule } from './scaner-routing.module';

import { ScanerPage } from './scaner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanerPageRoutingModule
  ],
  declarations: [ScanerPage]
})
export class ScanerPageModule {}
