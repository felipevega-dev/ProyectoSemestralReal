import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular';
import { AsistenciaService } from '../../services/asistencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  listData = [];
  fecha: String;
  nombre:String='';
  constructor(private storage:Storage, private menu:MenuController, private asistenciaService:AsistenciaService, private router:Router) { 
    this.loadData();
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

  async loadData(){
    this.listData = await this.asistenciaService.getData();
  }

  async addData(){
    await this.asistenciaService.addData(`ASISTENCIA REGISTRADA | PRESENTE | BASE DE DATOS | FECHA: ${this.fecha}`);
    this.loadData();
  }

  async removeItem(index){
    this.asistenciaService.removeItem(index);
    this.listData.splice(index, 1);
  }

  verPerfil() {
    this.router.navigate(["/perfil"]);
  }

}
