import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/authen/login.service';
import { UsersInterface, } from 'src/app/models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userStatus: any = ''
  loginStatus = localStorage.getItem(environment.loginStatus)
  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    const idUser = localStorage.getItem(environment.idCardUser)
    this.loginService.geOnetUser(idUser).subscribe(
      result => {
        if(result) this.userStatus = result.role
      }
    )
  }

}


