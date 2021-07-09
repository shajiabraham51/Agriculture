import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SharedService } from '../shared.service';
import { SharedService } from '../shared.service';
import { AddtoolsComponent } from './addtools/addtools.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewuserreqComponent } from './viewuserreq/viewuserreq.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';



@NgModule({
  declarations: [
    AddtoolsComponent,
    AdminloginComponent,
    ViewuserreqComponent,
    AdminhomeComponent
  
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
  ],
providers: [SharedService],
})
export class AdminModule { }
