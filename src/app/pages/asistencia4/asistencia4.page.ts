import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AsistenciaService } from 'src/app/services/asistencia.service';


@Component({
  selector: 'app-asistencia4',
  templateUrl: './asistencia4.page.html',
  styleUrls: ['./asistencia4.page.scss'],
})
export class Asistencia4Page implements OnInit {
  listData4 = [];
  fecha: String;
  nombre:String='';
  constructor(private storage:Storage, private menu:MenuController, private asistenciaService:AsistenciaService, private router:Router) { 
    this.loadData4();
  }

  ngOnInit() {
    this.verUsuario();
    // para obtener la fecha actual y hora
    this.fecha = new Date().toISOString();
    
  }

  

  async verUsuario(){
    this.nombre= await this.storage.get('sesion');
  }

  verMenu() {
    this.menu.open('first');
  }

  async loadData4(){
    this.listData4 = await this.asistenciaService.getData4();
  }

  async addData4(){
    await this.asistenciaService.addData4(`ASY4131 | FECHA:${this.fecha} | PRESENTE`);
    this.loadData4();
  }

  async removeItem4(index){
    this.asistenciaService.removeItem4(index);
    this.listData4.splice(index, 1);
  }

  verPerfil() {
    this.router.navigate(["/perfil"]);
  }

}
