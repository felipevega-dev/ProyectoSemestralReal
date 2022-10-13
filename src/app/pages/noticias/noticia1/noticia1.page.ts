import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-noticia1',
  templateUrl: './noticia1.page.html',
  styleUrls: ['./noticia1.page.scss'],
})
export class Noticia1Page implements OnInit {

  constructor(private router:Router, private storage:Storage
    ,private menu:MenuController) {}

  ngOnInit() {
  }

  verPerfil(){
    this.router.navigate(["/perfil"]);
  }

  verMenu(){
    this.menu.open('first');
  }

}
