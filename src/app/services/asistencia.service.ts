import { Injectable } from '@angular/core';
import { Asistencia } from '../models/asistencias';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  asistencias: Asistencia[];

  constructor() { 
   this.asistencias = [
     // {fecha: '13-10-2022', descripcion:'Jueves 13 de Octubre del 2022, a las 13:55PM', hide: true},
      //{fecha: '07-10-2022', descripcion:'Viernes 7 de Octubre del 2022, a las 13:55PM', hide:true}
    ];
  }

  getAsistencias(){
    if (localStorage.getItem('asistencias') == null){
      return this.asistencias;
    } else {
      this.asistencias = JSON.parse(localStorage.getItem('asistencias'));
      return this.asistencias;      
    }
    
  }

  addAsistencias(asistencia: Asistencia){
    this.asistencias.push(asistencia);
    let asistencias = [];
    if(localStorage.getItem('asistencias') == null){
      asistencias.push(asistencia);
      localStorage.setItem('asistencias', JSON.stringify(asistencias))  
    }else{
      asistencias = JSON.parse(localStorage.getItem('asistencias'));
      asistencias.push(asistencia);
      localStorage.setItem('asistencias', JSON.stringify(asistencias));
    }
    
    
   
  }

  deleteAsistencias(asistencia:Asistencia){
    for (let i = 0; i< this.asistencias.length; i++) {
      if(asistencia == this.asistencias[i] ){
        this.asistencias.splice(i,1);
        localStorage.setItem('asistencias', JSON.stringify(this.asistencias));
      }
      
    }

  }
}
