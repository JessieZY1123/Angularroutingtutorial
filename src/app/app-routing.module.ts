import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';

const routes: Routes = [
  {
    path:'emp',
    children:[
      {path:'list',component:EmployeeComponent},
      {path:'create',component:AddEmployeeComponent},
      {path:'detail/:id/:name',component:EmployeeDetailComponent},
      {path:'edit',component:EditEmployeeComponent}
    ]
  },
  {
    path:'album',
    loadChildren:()=> import('./album/album.module').then(x=>x.AlbumModule)
  },

  {
    path:'product',
    loadChildren:()=> import('./product/product.module').then(m=>m.ProductModule)
  },
  {
    path:'supplier',
    loadChildren:()=>import('./supplier/supplier.module').then(m=>m.SupplierModule)
  },
  {
    path:'**',component:PageNotFoundComponent
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
