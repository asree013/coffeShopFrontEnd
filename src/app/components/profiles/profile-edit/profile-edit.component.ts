import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Users, UsersInterface } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/authen/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  profile: any = []
  idUser: string = ''
  baseImg = `${environment.baseURL}images/`
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
    private activeRoute:ActivatedRoute,
    public location: Location,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      param => {
        this.idUser = param['id']
      }
    )
    this.loginService.geOnetUser(this.idUser).subscribe(
      result => {
        this.profile = result
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
  editProfile(formEdit: UsersInterface){
    let profile = new Users()
    profile.userName = formEdit.userName
    profile.password = formEdit.password
    profile.firstName = formEdit.firstName
    profile.lastName = formEdit.lastName
    profile.address = formEdit.address
    profile.idCard = formEdit.idCard
    profile.mail = formEdit.mail
    profile.phone = formEdit.phone
    this.loginService.editUser(this.idUser, formEdit).subscribe(
      result => {
        alert(JSON.stringify(result))
      },
      err => {
        alert(JSON.stringify(err))
      }
    )
  }

}
