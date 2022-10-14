import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {

  constructor(private router:Router,private loadingCtrl: LoadingController) { }

  ngOnInit() {
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
    this.router.navigate(['/qr'],navigationExtras)
    
    loading.present();
  }
}
