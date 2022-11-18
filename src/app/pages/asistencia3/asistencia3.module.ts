import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asistencia3PageRoutingModule } from './asistencia3-routing.module';

import { Asistencia3Page } from './asistencia3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Asistencia3PageRoutingModule
  ],
  declarations: [Asistencia3Page]
})
export class Asistencia3PageModule {}
