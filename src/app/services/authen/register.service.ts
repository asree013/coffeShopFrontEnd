import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Users, UsersInterface } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  register(registerForm: Users):Observable<Users> {
    return this.httpClient.post<Users>(`${environment.baseURLAuten}/register`, this.formDataCreate(registerForm))
  }

  formDataCreate(registerForm: Users){
    let data = new FormData()
    data.append('userName', registerForm.userName)
    data.append('password', registerForm.password)
    data.append('firstName', registerForm.firstName)
    data.append('lastName', registerForm.lastName)
    data.append('address', registerForm.address)
    data.append('mail', registerForm.mail)
    data.append('phone', registerForm.phone)
    data.append('idCard', registerForm.idCard)
    if(registerForm.image){
      data.append('photo', registerForm.image )
    }
    return data
  }
}
