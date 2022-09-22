import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-contra',
  templateUrl: './contra.page.html',
  styleUrls: ['./contra.page.scss'],
})
export class ContraPage implements OnInit {

  usuario={
    username:'',
    correo:''
  }
    constructor(private router:Router, private loadingCtrl: LoadingController, private alertController:AlertController) {}
  
    async showLoading() {
      const loading = await this.loadingCtrl.create({
        message: 'Se ha enviado un correo para cambiar la contraseña',
        duration: 2000,
      
      });
      let navigationExtras:NavigationExtras={
        state:{
        }
      }
      this.router.navigate(['/loginpage'],navigationExtras)
      
      loading.present();
  
    }
    
    ngOnInit() {
    }
    
    
    onSubmit()
    {
      if(this.usuario.username=="waco" && this.usuario.correo=="waco@gmail.com")
      {
        
        let navigationExtras:NavigationExtras={
          state:{
            miusuario:this.usuario,
            otracosa:'hola waldo'
          }
        }
        this.showLoading()
        this.router.navigate(['/loginpage'],navigationExtras)
        console.log(navigationExtras);
      }
      else{
        this.presentAlert();
        console.log("Denegado");
      }
    }
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Acceso Denegado',
        subHeader: '',
        message: 'Usuario o Correo incorrectos',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Alert canceled');
            },
          },
          {
            text: 'Aceptar',
            role: 'confirm',
            handler: () => {
              console.log('Alert confirmed');
            },
          },
        ],
        mode:'ios',
        backdropDismiss:false,
        cssClass:'miclase',
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log(`Dismissed with role: ${role}`);
    }
  }