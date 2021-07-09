import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
 
import { CustomerRoutingModule } from './customer-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewProductComponent } from './view-product/view-product.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ViewProductComponent,
    
  ],
  imports: [
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    
  ],
  providers: [SharedService],
})
export class CustomerModule{ }

