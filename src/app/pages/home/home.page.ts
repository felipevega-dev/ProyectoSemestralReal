import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Usuario } from '../../interfaces/usuario';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  registrado:Usuario=null;
  
  usuario:Usuario={
    username:'',
    password:'',
    correo: ''
  }

  constructor(
    private router:Router,public storage:Storage,
    private menu:MenuController
  ) { }

  verMenu(){
    this.menu.open('first');


  }

  cerrarSesion(){
    this.logout();
    this.router.navigate(["/login"]);
  }

  async logout(){
    await this.storage.set('session',null);
  }

  verPerfil(){
    this.router.navigate(["/perfil"]);
  }

  verNoticia1(){
    this.router.navigate(["/noticia1"]);
  }

  verNoticia2(){
    this.router.navigate(["/noticia2"]);
  }

  ngOnInit() {
    console.log(this.usuario)
    this.logear()
    
    
    
  }

  async logear()
  {
    this.registrado = await this.storage.get(this.usuario.username);
  }

}
