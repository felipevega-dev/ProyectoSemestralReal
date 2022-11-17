import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-formcontra',
  templateUrl: './formcontra.page.html',
  styleUrls: ['./formcontra.page.scss'],
})
export class FormcontraPage implements OnInit {
  usuario:Usuario={
    username:'',
    password:'',
    correo:''
  }

  constructor(private storage:Storage, private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.usuario);
    this.guardar();
  }

  async guardar()
  {
    let usr=await this.storage.get(this.usuario.username)
    console.log(this.usuario)
    console.log(usr)
    console.log(this.usuario.username)
    if (usr ==  this.usuario)
    {
      await this.storage.set(this.usuario.password, this.usuario);
      console.log("usuario registrado")
 
      this.router.navigate(["/loginpage"])
    }
    else{

      console.log("este usuario ya existe")
    }
    
  }
}
