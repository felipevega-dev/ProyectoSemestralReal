import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-scaner',
  templateUrl: './scaner.page.html',
  styleUrls: ['./scaner.page.scss'],
})
export class ScanerPage implements OnInit {

  constructor(private router:Router, private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Accediendo a la camara Espere 2 segundos...',
      duration: 2000,
    
    });
    let navigationExtras:NavigationExtras={
      state:{
      }
    }
    this.router.navigate(['/home'],navigationExtras)
    
    loading.present();

  }
  
  ngOnInit() {
  }

}
