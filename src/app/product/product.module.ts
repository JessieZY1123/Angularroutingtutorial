import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductRoutingModel } from "./product-routing.module";
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations:[
        ProductListComponent,
        AddProductComponent
    ],
    imports:[
        CommonModule,
        ProductRoutingModel,
        ReactiveFormsModule
    ]
})
export class ProductModule{  }