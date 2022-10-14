import { Component, OnInit, Input } from '@angular/core';
import { Asistencia } from '../../models/asistencias';
import { AsistenciaService } from '../../services/asistencia.service';
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
})
export class AsistenciaComponent implements OnInit {

  @Input() asistencia: Asistencia;
  constructor(
      public asistenciaService : AsistenciaService 
  ) { }

  ngOnInit() {}

  deleteAsistencia(asistencia : Asistencia){
    this.asistenciaService.deleteAsistencias(asistencia);
  }

}
