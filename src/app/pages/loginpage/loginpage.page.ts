import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  
  
  registrado:Usuario=null;
  
  usuario:Usuario={
    username:'',
    password:'',
    correo: ''
  }

  static Susuario;
  constructor(private router:Router, private storage:Storage, private alertController: AlertController) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.usuario);
    this.logear();

  }

  async logear()
  {
    this.registrado = await this.storage.get(this.usuario.username);

    if (this.registrado != null)
    {
      if(this.usuario.username == this.registrado.username && this.usuario.password == this.registrado.password)
      {
        //localStorage.setItem('ingresado','true');
        await this.storage.set('sesion',this.registrado.username);
        console.log("datos correctos, pase")
        this.router.navigate(["/home"]);
        LoginpagePage.Susuario = this.usuario.username;
      }
      else{
        console.log("contraseña incorrecta")
        this.contraseñaIncorrecta();
      }
    } 
    else{
      console.log("usuario no registrado")
      this.usuarionoRegistrado();
    }
  }

  async usuarionoRegistrado(){
    const alert = await this.alertController.create({
      header: 'ERROR',
      subHeader: '¿Escribiste bien los datos?',
      message: 'Usuario no registrado en el sistema',
      buttons: ['Volver a intentar'],
    });

    await alert.present();
  }

  async contraseñaIncorrecta(){
    const alert = await this.alertController.create({
      header: 'ERROR',
      subHeader: '¿Escribiste bien los datos?',
      message: 'Usuario o Contraseña Incorrectas',
      buttons: ['Volver a intentar'],
    });

    await alert.present();
  }
}
