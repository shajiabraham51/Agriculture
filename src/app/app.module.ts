import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { SharedService } from './shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AddtoolsComponent } from './admin/addtools/addtools.component';
import { ViewuserreqComponent } from './admin/viewuserreq/viewuserreq.component';
import { RegisterComponent } from './customer/register/register.component';
import { LoginComponent } from './customer/login/login.component';
import { ViewProductComponent } from './customer/view-product/view-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminloginComponent,
    AddtoolsComponent,
    ViewuserreqComponent,
    RegisterComponent,
    LoginComponent,
    ViewProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
