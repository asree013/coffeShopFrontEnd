import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  // baseImage: string = `${environment.baseURL}`
  constructor(
    private router: Router,
    private activateRout: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.activateRout.params.subscribe(params => {
      let id = params['id']
      this.productService.oneProduct(id).subscribe((result) => {
        this.productItem = result
        this.productItem.image = `${environment.baseURL}images/${result.image}`
      })
    })
  }

  addCard(productId: any){
    let loginStatus = localStorage.getItem(environment.loginStatus)
    if(loginStatus === 'ok'){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `เพิ่ม ${productId.name} ในตะกร้าสอนค้าแล้ว`,
        showConfirmButton: false,
        timer: 3000
      })
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
