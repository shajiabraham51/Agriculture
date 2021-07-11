import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtoolsComponent } from './addtools/addtools.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewuserreqComponent } from './viewuserreq/viewuserreq.component';
import {AuthGuard} from "../auth-guard/auth-guard";

const routes: Routes = [

  {
    path: '',
    component: AdminhomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },

  {
    path: 'login',
    component: AdminloginComponent,
    pathMatch: 'full'
  },

  {
    path: 'addtools',
    component: AddtoolsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },

  {
    path: 'viewuserreq',
    component: ViewuserreqComponent,
    canActivate: [AuthGuard]
  }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
