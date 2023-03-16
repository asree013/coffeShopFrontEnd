import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Users, UsersInterface} from '../../models/user.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private httpClient: HttpClient,
  ) { }

  login(loginForm: UsersInterface): Observable<any>{
    return this.httpClient.post<any>(`${environment.baseURLAuten}/login`, loginForm)
  }
  geOnetUser(id: any): Observable<UsersInterface>{
    return this.httpClient.get<UsersInterface>(`${environment.baseURLAuten}/users/${id}`)
  }
  AllUser(): Observable<UsersInterface[]>{
    return this.httpClient.get<UsersInterface[]>(`${environment.baseURLAuten}/users`)
  }
  deleteUsers(id:string): Observable<any>{
    return this.httpClient.delete<any>(`${environment.baseURLAuten}/users/${id}`)
  }
  editUser(id: string, newProfile: Users): Observable<Users>{
    return this.httpClient.put<Users>(`${environment.baseURLAuten}/users/${id}`, this.makeProfile(newProfile))
  }

  isLogin() {
    let loginStatus = localStorage.getItem(environment.loginStatus)
    return (loginStatus != null && loginStatus == 'ok')
  }

  isNotLogin() {
    let loginStatus = localStorage.getItem(environment.loginStatus)
    return (loginStatus != null && loginStatus != 'ok')
  }

  makeProfile(profile: Users){
    let formData = new FormData()
    formData.append('userName', profile.userName)
    formData.append('password', profile.password)
    formData.append('firstName', profile.firstName)
    formData.append('lastName', profile.lastName)
    formData.append('address', profile.address)
    formData.append('idCard', profile.idCard)
    formData.append('mail', profile.mail)
    formData.append('phone', profile.phone)
    if(profile.image) {
      formData.append('photo', profile.image)
    }
    return formData
  }

}
