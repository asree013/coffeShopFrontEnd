import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShopCart } from 'src/app/models/shopCart.model';
import { AddcartService } from 'src/app/services/addcart/addcart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productItem: any = []
  idProduct: string = ''
  constructor(
    private router: Router,
    private activateRout: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private addcartService: AddcartService,
  ) { }

  ngOnInit(): void {
    this.activateRout.params.subscribe(params => {
      this.idProduct = params['id']
      this.productService.oneProduct(this.idProduct).subscribe((result) => {
        this.productItem = result
        this.productItem.image = `${environment.baseURL}images/${result.image}`
      })
    })
  }

  addCard(ProductId: string){
    let loginStatus = localStorage.getItem(environment.loginStatus)
    let idUser = localStorage.getItem(environment.idCardUser)
    if(loginStatus === 'ok'){
      const addProduct = new ShopCart()
      addProduct.amount = 1
      addProduct.cardStatus = 'รอชำระเงิน'
      addProduct.userId = `${idUser}`
      addProduct.productId = ProductId
      this.addcartService.addCart(addProduct).subscribe(
        result => {
          this.router.navigate(['/product/cart/home'])
        },
        err => {
          console.log(err);

        }
      )
    }
    else{
      Swal.fire({
        title: 'กรุณา Login เพื่อเพิ่มสินค้า',
        text: "ตุณยังไม่ได้ Login จึงไม่สามารคเพิ่มสอนค้าได้",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ไปหน้า Login'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: 'center',
            title: 'ไปยังหน้า Login',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/login'])
        }
      })
    }
  }
  goBack() {
    this.location.back()
  }
}
