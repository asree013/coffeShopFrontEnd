import { Component, OnInit } from '@angular/core';
import { UsersInterface } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/authen/login.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {
  profileAll:UsersInterface[] = []
  baseImg = `${environment.baseURL}images/`
  constructor(
    private loginService:LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginService.AllUser().subscribe(
      result => {
        this.profileAll = result
      }
    )
  }

  editProfile(id: string){
    this.router.navigate(['/profile/edit/', id])
  }
  deleteProfile(id: string){
    this.loginService.deleteUsers(id).subscribe(
      result => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.loginService.AllUser().subscribe(
              result => {
                this.profileAll = result
              }
            )
          }
        })
      }
    )
  }
}
