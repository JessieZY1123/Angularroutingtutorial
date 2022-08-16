import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { SupplierModule } from './supplier/supplier.module';
import { SupplierRoutingModel } from './supplier/supplier-routing.module';
import { ProductModule } from './product/product.module';
import { ProductRoutingModel } from './product/product-routing.module';
import { AlbumModule } from './album/album.module';
import{HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EmployeeDetailComponent,
    PageNotFoundComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SupplierModule,
    SupplierRoutingModel,
    ProductModule,
    ProductRoutingModel,
    AlbumModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
