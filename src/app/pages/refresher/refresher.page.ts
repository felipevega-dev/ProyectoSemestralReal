import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  constructor() { }

  coleccion:any=[];
  avatar=
  {
    imagen:'/assets/chavat.jpg',
    nombre:'Cheems',
    subtexto:'Me da ansiedad hacer animaciones'
  }

  ngOnInit() {
  }

  doRefresh(evento){
    console.log("Refrescando la página");
    console.log(evento);

    setTimeout(() => {
      evento.target.complete();
      
      for (let index = 0; index < 10; index++) {
        this.coleccion[index]=this.avatar;
        
      }


    }, 2000);
  }

}
