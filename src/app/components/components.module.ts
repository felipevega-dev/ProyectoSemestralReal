import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { AsistenciaFormComponent } from './asistencia-form/asistencia-form.component';
import { AsistenciaListComponent } from './asistencia-list/asistencia-list.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


@NgModule({
  declarations: [AsistenciaComponent, AsistenciaFormComponent, AsistenciaListComponent,],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [AsistenciaComponent, AsistenciaFormComponent, AsistenciaListComponent]
})
export class ComponentsModule { }
