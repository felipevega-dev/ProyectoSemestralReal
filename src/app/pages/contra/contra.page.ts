import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from 'src/app/interfaces/usuario';
@Component({
  selector: 'app-contra',
  templateUrl: './contra.page.html',
  styleUrls: ['./contra.page.scss'],
})
export class ContraPage implements OnInit {

  usuario:Usuario={
    username:'',
    password:'',
    correo:''
  }
    constructor(private storage:Storage, private router:Router, private loadingCtrl: LoadingController, private alertController:AlertController) {}
  
    async showLoading() {
      const loading = await this.loadingCtrl.create({
        message: 'Se ha modificado la contraseña exitosamente',
        duration: 2000,
      });
      loading.present();
    }
    
    ngOnInit() {
    }
    
    async obtener()
    {
      let usr= await this.storage.get(this.usuario.username)
      if(this.usuario.username== usr.username && this.usuario.correo==usr.correo)
      {
        await this.storage.set(this.usuario.username, this.usuario);
        this.showLoading()
        this.router.navigate(['/loginpage'])
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
    
    onSubmit()
    {
    this.obtener()
    
    }
}