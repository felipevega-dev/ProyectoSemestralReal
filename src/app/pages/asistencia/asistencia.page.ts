import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  fecha = Date.now();
  nombre:String='';
  constructor(private storage:Storage, private menu:MenuController) { }

  ngOnInit() {
    this.verUsuario();
  }

  async verUsuario(){
    this.nombre= await this.storage.get('sesion');
  }

  verMenu() {
    this.menu.open('first');


  }
}
