import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/authen/register.service';
import Swal from 'sweetalert2';
import { Users, UsersInterface } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ErrValidate = false
  errUername = false
  errPass = false
  errComPass = false
  errFirsName = false
  errLastName = false
  errPhone = false
  errIdCard = false
  errMail = false
  errAddress = false
  imagePreview: string | ArrayBuffer | null | undefined;
  file: File | undefined;
  constructor(
    public location: Location,
    public router: Router,
    private registerService:RegisterService,
  ) { }

  ngOnInit(): void {
  }

  registerValidate( registerForm : NgForm){
    if(registerForm.invalid){
      return
    }
    const value = registerForm.value
    let data = new Users()
    data.userName = value.userName
    data.password = value.password
    data.firstName = value.firstName
    data.lastName = value.lastName
    data.phone = value.phone
    data.idCard = value.idCard
    data.mail = value.mail
    data.address = value.address
    data.image = this.file

    this.registerService.register(data).subscribe(
      result => {
        this.ErrValidate = false
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your Registed!!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/login'])
      },
      error => {
        alert(error);
      }
    )

  }

  onPrevieImage(event: any) {
    const metaImage = event.target.files[0];
    if (metaImage) {
      this.file = metaImage;
      const reader = new FileReader();
      reader.readAsDataURL(metaImage)
      reader.onload = () => {
        this.imagePreview = reader.result;
      }
    }
  }

}
