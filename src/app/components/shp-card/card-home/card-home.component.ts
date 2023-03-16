import { Component, OnInit } from '@angular/core';
import { AddcartService } from 'src/app/services/addcart/addcart.service';
import { environment } from 'src/environments/environment';
import { ShopCartInterface } from 'src/app/models/shopCart.model';
import { ProductService } from 'src/app/services/product/product.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {
  totallPrice: number = 0
  idUser = localStorage.getItem(environment.idCardUser)
  myCart: ShopCartInterface[] = []
  baseImg = `${environment.baseURL}images/`
  constructor(
    private addCartService: AddcartService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.addCartService.getShopCartById(`${this.idUser}`).subscribe(
      result => {
        this.myCart = result
      }
    )
  }
  deletCart(id: string){
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
        this.addCartService.deleteCart(id).subscribe(
          result => {
            this.addCartService.getShopCartById(`${this.idUser}`).subscribe(
              result => {
                this.myCart = result
              }
            )
          }
        )
      }
    })
  }

}
