import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductElement, Product } from '../../../../models/product.model'
import { ProductService } from 'src/app/services/product/product.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  product: ProductElement[] = [] 
  baseIMG: string = `${environment.baseURL}images/`

  constructor(
    private ruoter: Router,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.feedDataProduct()
  }
  gotoProductDetail(id: string) {
    this.ruoter.navigate(['product/detail/', id])
  }

  feedDataProduct() {
    this.productService.getProducts().subscribe((result) => {
      this.product = result
    })
  }

}
