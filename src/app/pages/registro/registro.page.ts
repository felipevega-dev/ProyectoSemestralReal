import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario:Usuario={
    username:'',
    password:'',
    correo:''
  }

  constructor(private storage:Storage, private router:Router, private alertController:AlertController) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.usuario);
    this.guardar();
  }

  async guardar()
  {
    let usr=await this.storage.get(this.usuario.username)

    if (usr == null)
    {
      await this.storage.set(this.usuario.username, this.usuario);
      console.log("usuario registrado")
      this.usuarioRegistradoCorrectamente();
      this.router.navigate(["/loginpage"])
    }
    else{
      this.usuarioExistente();
      console.log("este usuario ya existe")
    }
    
  }

  async usuarioRegistradoCorrectamente(){
    const alert = await this.alertController.create({
      header: 'EXITO',
      subHeader: 'USUARIO REGISTRADO CORRECTAMENTE',
      message: 'Ya puedes iniciar sesión en la aplicación!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async usuarioExistente(){
    const alert = await this.alertController.create({
      header: 'ERROR',
      subHeader: 'USUARIO YA EXISTE',
      message: 'El nombre de usuario que elegiste ya está en uso :(',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
