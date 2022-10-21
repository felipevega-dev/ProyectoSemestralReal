import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AsistenciaService } from 'src/app/services/asistencia.service';


@Component({
  selector: 'app-asistencia2',
  templateUrl: './asistencia2.page.html',
  styleUrls: ['./asistencia2.page.scss'],
})
export class Asistencia2Page implements OnInit {
  listData2 = [];
  fecha: String;
  nombre:String='';
  constructor(private storage:Storage, private menu:MenuController, private asistenciaService:AsistenciaService, private router:Router) { 
    this.loadData2();
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

  async loadData2(){
    this.listData2 = await this.asistenciaService.getData2();
  }

  async addData2(){
    await this.asistenciaService.addData2(`ASISTENCIA REGISTRADA | PRESENTE | PROGRAMACIÓN WEB | FECHA: ${this.fecha}`);
    this.loadData2();
  }

  async removeItem2(index){
    this.asistenciaService.removeItem2(index);
    this.listData2.splice(index, 1);
  }

  verPerfil() {
    this.router.navigate(["/perfil"]);
  }

}
