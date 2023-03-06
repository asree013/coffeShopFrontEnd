import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/authen/login.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFail = false
  constructor(
    public location: Location,
    public router: Router,
    private loginService: LoginService, 
  ) { }

  ngOnInit(): void {
    if(this.loginService.isLogin() == true){
      this.router.navigate(['/product'])
    }
  }

  loginSubmit(loginForm: any) {
    this.loginService.login(loginForm).subscribe(
       (data)=> {
        console.log(data);
        if(data.response == 'ok'){
          localStorage.setItem(environment.loginStatus, 'ok')
          localStorage.setItem(environment.idCardUser, data.users)
          window.location.reload();
          this.router.navigate(['/product'])
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logined Success!!',
            showConfirmButton: false,
            timer: 1500
          })
        }
      },
      (err) => {
        if(err){
          this.loginFail = true
        }
      }
      )
  }

}
