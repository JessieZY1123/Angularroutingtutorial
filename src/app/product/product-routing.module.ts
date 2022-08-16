import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductModule } from "./product.module";

const routes: Routes=[
    {
        path:'list',component:ProductListComponent
    },
    {
        path:'add',component: AddProductComponent
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ProductRoutingModel{}