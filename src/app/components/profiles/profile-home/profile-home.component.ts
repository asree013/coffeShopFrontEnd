import { Component, OnInit } from '@angular/core';
import { UsersInterface } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/authen/login.service';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {
  
  constructor(
  ) { }

  ngOnInit(): void {

  }

}
