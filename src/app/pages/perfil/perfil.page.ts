import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  correo:String='';
  nombre:String='';
  constructor(private menu:MenuController, private router:Router, private storage:Storage, private loadingCtrl:LoadingController) { }

  ngOnInit() {
    this.verUsuario();
    this.verCorreo();
  }

  verMenu(){
    this.menu.open('first');
  }

  async verUsuario(){
    this.nombre= await this.storage.get('sesion');
  }

  async verCorreo(){
    this.correo = await this.storage.get('correo');
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando asistencias',
      duration: 1300,
    
    });
    let navigationExtras:NavigationExtras={
      state:{
      }
    }
    this.router.navigate(['/asistencia'],navigationExtras)
    
    loading.present();
  }

  async showLoading2() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando asistencias',
      duration: 1300,
    
    });
    let navigationExtras:NavigationExtras={
      state:{
      }
    }
    this.router.navigate(['/asistencia2'],navigationExtras)
    
    loading.present();
  }



  
}
