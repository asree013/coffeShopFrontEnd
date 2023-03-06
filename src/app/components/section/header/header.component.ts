import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/authen/login.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: any = []
  lastName: any = []
  islogin = false

  constructor(
    public loginService: LoginService,
    private router: Router,
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
