import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asistencia4PageRoutingModule } from './asistencia4-routing.module';

import { Asistencia4Page } from './asistencia4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Asistencia4PageRoutingModule
  ],
  declarations: [Asistencia4Page]
})
export class Asistencia4PageModule {}
