import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { Storage } from '@ionic/storage-angular';
import { Asistencia2Page } from '../asistencia2/asistencia2.page';


@Component({
  selector: 'app-scaner',
  templateUrl: './scaner.page.html',
  styleUrls: ['./scaner.page.scss'],
})
export class ScanerPage implements OnInit {
  listData2 = [];
  listData = [];
  fecha: String;
  nombre:String='';
  constructor(private router:Router, private asistenciaService: AsistenciaService, 
    private alertController:AlertController, private storage: Storage) {
      this.loadData2();
    }
  
  ngOnInit() {

    this.verUsuario();
    // para obtener la fecha actual y hora
    this.fecha = new Date().toISOString();
  }


  async marcarAsistenciaMov(){
    const alert = await this.alertController.create({
      header: 'EXITO',
      subHeader: 'PGY4123',
      message: 'Asistencia Guardada Correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async marcarAsistenciaDat(){
    const alert = await this.alertController.create({
      header: 'EXITO',
      subHeader: 'PBD3123',
      message: 'Asistencia Guardada Correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async verUsuario(){
    this.nombre= await this.storage.get('sesion');
  }

  async addData2(){
    await this.asistenciaService.addData2(`PGY4121 | FECHA:${this.fecha} | PRESENTE`);
    this.loadData2();
  }

  async loadData2(){
    this.listData2 = await this.asistenciaService.getData2();
  }

  async addData(){
    await this.asistenciaService.addData(`PBD3121 | FECHA:${this.fecha} | PRESENTE`);
    this.loadData();
  }

  async loadData(){
    this.listData = await this.asistenciaService.getData();
  }


}
