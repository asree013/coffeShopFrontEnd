import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/authen/login.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AddcartService } from 'src/app/services/addcart/addcart.service';
import { ShopCartInterface } from 'src/app/models/shopCart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItem:number = 0
  userName: any
  lastName: any
  images:any
  baseImg = `${environment.baseURL}images/`
  islogin = false

  constructor(
    public loginService: LoginService,
    private router: Router,
    private addCart: AddcartService
  ) { }

  ngOnInit(): void {
    this.checkLogin()
  }

  checkLogin() {
    let checkLogin = localStorage.getItem(environment.loginStatus)
    if ( checkLogin === 'ok') {
      this.islogin = true
      const idUser = localStorage.getItem(environment.idCardUser)
      this.loginService.geOnetUser(idUser).subscribe(
        (result) => {
          this.userName = result.firstName
          this.lastName = result.lastName
          this.images = result.image
          this.addCart.getShopCartById(`${idUser}`).subscribe(
            result => {
              if(result) this.cartItem = result.length
            }
          )
        }
      )
    }
    else{
      this.islogin = false
      this.userName = ''
      this.lastName = ''
    }
  }

  logout() {
    localStorage.removeItem(environment.loginStatus)
    localStorage.removeItem(environment.idCardUser)
    this.router.navigate(['/login'])
    window.location.reload();
  }

}
