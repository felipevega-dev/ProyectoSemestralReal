import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Noticia1PageRoutingModule } from './noticia1-routing.module';

import { Noticia1Page } from './noticia1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Noticia1PageRoutingModule
  ],
  declarations: [Noticia1Page]
})
export class Noticia1PageModule {}
