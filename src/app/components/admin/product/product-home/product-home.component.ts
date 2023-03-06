import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(this.isLogin() == true){
      this.router.navigate(['/product'])
    }
  }

  isLogin() {
    let loginStatus = localStorage.getItem(environment.loginStatus)
    return (loginStatus !== null && loginStatus == 'ok')
  }

}
