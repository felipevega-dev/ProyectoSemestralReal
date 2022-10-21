import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {
  nombre:String='';
  constructor(private router:Router,private loadingCtrl: LoadingController, private storage:Storage) { }

  ngOnInit() {
    this.verUsuario();
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

  async verUsuario(){
    this.nombre= await this.storage.get('sesion');
  }

  verPerfil() {
    this.router.navigate(["/perfil"]);
  }
}
