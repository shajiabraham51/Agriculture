import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { ProductComponent } from '../home/components/product/product.component';
import { FormsModule } from '@angular/forms';
import { ViewtoolsComponent } from './viewtools/viewtools.component';


@NgModule({
  declarations: [
    ProductComponent,
    ViewtoolsComponent
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule,
    FormsModule,
  ]
})
export class FarmerModule { }
