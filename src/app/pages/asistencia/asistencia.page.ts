import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular';
import { AsistenciaService } from '../../services/asistencia.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  listData = [];
  fecha = Date.now();
  nombre:String='';
  constructor(private storage:Storage, private menu:MenuController, private asistenciaService:AsistenciaService) { 
    this.loadData();
  }

  ngOnInit() {
    this.verUsuario();
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
    await this.asistenciaService.addData(`Simon ${Math.floor(Math.random()* 100)}`);
    this.loadData();
  }

  async removeItem(index){
    this.asistenciaService.removeItem(index);
    this.listData.splice(index, 1);
  }

}
