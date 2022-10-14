import { Component, OnInit } from '@angular/core';

import { AsistenciaService } from '../../services/asistencia.service';

@Component({
  selector: 'app-asistencia-form',
  templateUrl: './asistencia-form.component.html',
  styleUrls: ['./asistencia-form.component.scss'],
})
export class AsistenciaFormComponent implements OnInit {

  constructor(
    public asistenciaService: AsistenciaService
  ) { }

  ngOnInit() {}

  //boton agrega asistencia
  addAsistencia(newFecha: HTMLInputElement, newDescription: HTMLInputElement){
    console.log(newFecha.value , newDescription.value);
    this.asistenciaService.addAsistencias({
      fecha: newFecha.value,
      descripcion: newDescription.value,hide:true
    });
    newFecha.value = '';
    newDescription.value = '';
    newFecha.focus();
    return false;  
  }
}
