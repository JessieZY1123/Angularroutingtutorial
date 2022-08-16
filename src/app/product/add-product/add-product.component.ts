import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

addProductForm!:FormGroup  // undefined
product={
  productName: "Server",
  unitPrice:"2000",
  supplierId:"1"
}
//one formBuilder can have mulitple formGroup
  constructor(private builder:FormBuilder) {

  }

  ngOnInit(): void {
      this.addProductForm = this.builder.group({
      'productName': new FormControl('',[Validators.required,
      Validators.minLength(6)]),
      'unitPrice':new FormControl('',[Validators.required,Validators.min(1)]),
      'supplierId':new FormControl('0')  //default value
    })

    // this.addProductForm = new FormGroup({
    //   'productName': new FormControl('',[Validators.required,
    //   Validators.minLength(6)]),
    //   'unitPrice':new FormControl('',[Validators.required,Validators.min(1)]),
    //   'supplierId':new FormControl('0')  //default value
    // })
   // this.addProductForm.setValue(product) it works if product object in the ngOnInit method
  }
  addProduct(){
    console.log(this.addProductForm.value);
    console.log(this.addProductForm.get('unitPrice')?.value); // navigation operator (?.) is a fluent and convenient way to guard against null and undefined values in property paths.
  }
  loadValues(){
    this.addProductForm.setValue(this.product);
  }
  resetForm(){
    this.addProductForm.reset();
  }

}
