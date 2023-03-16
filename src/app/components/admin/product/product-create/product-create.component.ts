import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductElement, Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  imagePreview: string | ArrayBuffer | null | undefined
  file:File | undefined
  productName:Product[] = []
  constructor(
    public location: Location,
    private productService: ProductService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  createProduct(object: NgForm){
    if(object.invalid){
      return
    }
    const value = object.value
    let data = new Product()
    data.name = value.name
    data.price = value.price
    data.stock = value.stock
    data.catagory = value.catagory
    data.detail = value.detail
    data.image = this.file
    this.productService.createProduct(data).subscribe(
      result => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Your Created Product ${result}`,
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/product/admin'])
      }
    )
  }

  previewImage(event: any) {
    const dataImage = event.target.files[0]
    if(dataImage){
      this.file = dataImage
      const reader = new FileReader()
      reader.readAsDataURL(dataImage)
      reader.onload = () => {
        this.imagePreview = reader.result
      }
    }
  }

}
