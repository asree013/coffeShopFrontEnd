import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {UsersInterface} from '../../models/user.model'
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

  isLogin() {
    let loginStatus = localStorage.getItem(environment.loginStatus)
    return (loginStatus != null && loginStatus == 'ok')
  }

  isNotLogin() {
    let loginStatus = localStorage.getItem(environment.loginStatus)
    return (loginStatus != null && loginStatus != 'ok')
  }

}
