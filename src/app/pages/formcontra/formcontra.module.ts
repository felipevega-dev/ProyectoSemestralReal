import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormcontraPageRoutingModule } from './formcontra-routing.module';

import { FormcontraPage } from './formcontra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormcontraPageRoutingModule
  ],
  declarations: [FormcontraPage]
})
export class FormcontraPageModule {}
