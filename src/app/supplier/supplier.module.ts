import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierListComponent } from '../supplier/supplier-list/supplier-list.component';
import { SupplierRoutingModel } from './supplier-routing.module';



@NgModule({
  declarations: [
    SupplierListComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModel
  ]
})
export class SupplierModule { }
