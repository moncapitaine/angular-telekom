import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product-page',
  templateUrl: './new-product-page.component.html',
  styleUrls: ['./new-product-page.component.css']
})
export class NewProductPageComponent {

  productFormGroup: FormGroup
  constructor(fb: FormBuilder, private productService: ProductService ) {
    this.productFormGroup = fb.group({
      "name": ['', [Validators.required, Validators.minLength(3)]],
      "description": ['', []]
    })
  }

  onSubmit() {
    console.log(this.productFormGroup)
    this.productService.addNew({
      name: this.productFormGroup.controls['name'].value,
      description: this.productFormGroup.controls['description'].value
    })
  }
}
