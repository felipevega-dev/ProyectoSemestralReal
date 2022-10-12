import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    if (usr == null)
    {
      await this.storage.set(this.usuario.username, this.usuario);
      console.log("usuario registrado")
      this.router.navigate(["/loginpage"])
    }
    else{
      console.log("este usuario ya existe")
    }
    
  }

}
