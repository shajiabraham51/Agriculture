import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../home/components/login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewProductComponent } from './view-product/view-product.component';
import {AuthGuard} from "../auth-guard/auth-guard";

const routes: Routes = [
  {
    path: 'register',
    component:RegisterComponent,
    pathMatch: 'full'

  },
  {
    path: 'view-product',
    component: ViewProductComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: 'login',
    component: LoginComponent,
    pathMatch: 'full' 

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
