import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SupplierListComponent } from "./supplier-list/supplier-list.component";
import { SupplierModule } from "./supplier.module";

const routes: Routes=[
    {
        path:'list',component:SupplierListComponent
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class SupplierRoutingModel{}