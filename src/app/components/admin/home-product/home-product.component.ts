import { Component, OnInit } from '@angular/core';
import { ProductElement, Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {
  productAll: ProductElement[] = []
  baseImg = `${environment.baseURL}images/`
  constructor(
    private productService:ProductService,
    public location:Location,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.feedProduct()
  }

  feedProduct() {
    this.productService.getProducts().subscribe(
      result => {
        this.productAll = result
      },
      error => {
        console.log(error);
      }
    )
  }

  showImg(img: any){
    Swal.fire({
      imageUrl: `${this.baseImg}${img}`,
      imageHeight: 400,
      imageAlt: 'A tall image'
    })
  }

  editProducts(id: string){
    this.router.navigate(['/product/edit/', id])
  }
  deleteProduct(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Deleted Data`,
          showConfirmButton: false,
          timer: 1500
        })
        this.productService.deleteProduct(id).subscribe(
          async result => {
            if(result) {
              this.productService.getProducts().subscribe(
                data => {
                  this.productAll = data
                }
              )
            }
          },
          error => {
            alert(error)
          }
        )
      }
    })
  }
}
