import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class AutorizarGuard implements CanActivate {
  
  constructor(private storage:Storage, private router:Router) { }

  async autorizar () 
  {
    let usr=await this.storage.get('sesion');
    if(usr!=null)
    {
      return true;
      
    }else{
      this.router.navigate(['/loginpage']);
    }
    return false;
} 

  //varse = localStorage.getItem('ingresado')

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.autorizar();
  }
}
