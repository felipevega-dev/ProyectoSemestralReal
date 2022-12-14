import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizarGuard } from './guards/autorizar.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'loginpage',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate:[AutorizarGuard]
  },

  {
    path: 'loginpage',
    loadChildren: () => import('./pages/loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'listas',
    loadChildren: () => import('./pages/listas/listas.module').then( m => m.ListasPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'scaner',
    loadChildren: () => import('./pages/scaner/scaner.module').then( m => m.ScanerPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'contra',
    loadChildren: () => import('./pages/contra/contra.module').then( m => m.ContraPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'noticia1',
    loadChildren: () => import('./pages/noticias/noticia1/noticia1.module').then( m => m.Noticia1PageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'noticia2',
    loadChildren: () => import('./pages/noticias/noticia2/noticia2.module').then( m => m.Noticia2PageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'asistencia2',
    loadChildren: () => import('./pages/asistencia2/asistencia2.module').then( m => m.Asistencia2PageModule),
    canActivate:[AutorizarGuard]
  },  {
    path: 'asistencia3',
    loadChildren: () => import('./pages/asistencia3/asistencia3.module').then( m => m.Asistencia3PageModule)
  },
  {
    path: 'asistencia4',
    loadChildren: () => import('./pages/asistencia4/asistencia4.module').then( m => m.Asistencia4PageModule)
  },



  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
