import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Noticia2PageRoutingModule } from './noticia2-routing.module';

import { Noticia2Page } from './noticia2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Noticia2PageRoutingModule
  ],
  declarations: [Noticia2Page]
})
export class Noticia2PageModule {}
