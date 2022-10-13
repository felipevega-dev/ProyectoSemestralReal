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

  constructor(private menu:MenuController, private router:Router, private storage:Storage, private loadingCtrl:LoadingController) { }

  ngOnInit() {
  }

  verMenu(){
    this.menu.open('first');
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Accediendo a control de asistencia...',
      duration: 2000,
    
    });
    let navigationExtras:NavigationExtras={
      state:{
      }
    }
    this.router.navigate(['/qr'],navigationExtras)
    
    loading.present();
  }
  
}
