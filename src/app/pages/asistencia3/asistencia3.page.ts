import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AsistenciaService } from 'src/app/services/asistencia.service';


@Component({
  selector: 'app-asistencia3',
  templateUrl: './asistencia3.page.html',
  styleUrls: ['./asistencia3.page.scss'],
})
export class Asistencia3Page implements OnInit {
  listData3 = [];
  fecha: String;
  nombre:String='';
  constructor(private storage:Storage, private menu:MenuController, private asistenciaService:AsistenciaService, private router:Router) { 
    this.loadData3();
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

  async loadData3(){
    this.listData3 = await this.asistenciaService.getData3();
  }

  async addData3(){
    await this.asistenciaService.addData3(`CSY4111 | FECHA:${this.fecha} | PRESENTE`);
    this.loadData3();
  }

  async removeItem3(index){
    this.asistenciaService.removeItem3(index);
    this.listData3.splice(index, 1);
  }

  verPerfil() {
    this.router.navigate(["/perfil"]);
  }

}
