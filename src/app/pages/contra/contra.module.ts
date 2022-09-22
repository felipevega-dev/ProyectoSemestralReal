import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContraPageRoutingModule } from './contra-routing.module';

import { ContraPage } from './contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContraPageRoutingModule
  ],
  declarations: [ContraPage]
})
export class ContraPageModule {}
