import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asistencia2PageRoutingModule } from './asistencia2-routing.module';

import { Asistencia2Page } from './asistencia2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Asistencia2PageRoutingModule
  ],
  declarations: [Asistencia2Page]
})
export class Asistencia2PageModule {}
