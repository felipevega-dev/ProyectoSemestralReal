import { Component, OnInit } from '@angular/core';

import { AsistenciaService } from '../../services/asistencia.service';  

import { Asistencia } from '../../models/asistencias';

@Component({
  selector: 'app-asistencia-list',
  templateUrl: './asistencia-list.component.html',
  styleUrls: ['./asistencia-list.component.scss'],
})
export class AsistenciaListComponent implements OnInit {

  asistencias: Asistencia[];
  constructor(
    public asistenciaService: AsistenciaService
  ) { }

  ngOnInit() {

    this.asistencias = this.asistenciaService.getAsistencias();
  }

}
