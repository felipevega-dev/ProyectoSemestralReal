import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu:MenuController, private storage:Storage, private router:Router) {}


  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

  cerrarMenu()
  {
    this.menu.close('first');
  }

  cerrarSesion(){
    this.logout();
    this.router.navigate(["/loginpage"]);
  }

  async logout(){
    await this.storage.set('sesion',null);
  }
}
