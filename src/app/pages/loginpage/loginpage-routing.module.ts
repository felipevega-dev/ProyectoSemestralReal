import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginpagePage } from './loginpage.page';

const routes: Routes = [
  {
    path: '',
    component: LoginpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginpagePageRoutingModule {}
