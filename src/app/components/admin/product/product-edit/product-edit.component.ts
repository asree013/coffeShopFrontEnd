import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductElement } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  imagePreview: string | ArrayBuffer | null | undefined
  product: any = []
  file:File | undefined
  baseImg = `${environment.baseURL}images/`
  idProduct:string = ''

  constructor(
    private router:Router,
    private activateRout: ActivatedRoute,
    private productService:ProductService,
    public location:Location,
  ) { }

  ngOnInit(): void {
    this.activateRout.params.subscribe(async params => {
      this.idProduct = params['id']
      this.productService.getOneProduct(this.idProduct).subscribe(
        result => {
          this.product = result
        },
        error => {
          console.log(error);
        }
      )
    })
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
  editData(edit: Product){
    let data = new Product()
    data.image = this.file
    data.name = edit.name
    data.stock = edit.stock
    data.price = edit.price
    data.catagory = edit.catagory
    data.detail = edit.detail

    this.productService.editProduct(this.idProduct, data).subscribe(
      result => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Edit Complete',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/product/admin'])
      },
      error => {
        console.log(error);

      }
    )
  }

}
