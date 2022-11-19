import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AsistenciaService } from './services/asistencia.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    IonicStorageModule.forRoot({
      name: "mydatabase"}),],
  providers: [AsistenciaService,{ provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy, }, BarcodeScanner] ,
  bootstrap: [AppComponent],
})
export class AppModule {}
