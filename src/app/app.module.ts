import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';

import { AsistenciaService } from './services/asistencia.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    HttpClientModule, IonicStorageModule.forRoot(), ComponentsModule],
  providers: [AsistenciaService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }] ,
  bootstrap: [AppComponent],
})
export class AppModule {}
