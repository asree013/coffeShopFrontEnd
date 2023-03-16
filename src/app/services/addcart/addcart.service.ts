import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ShopCart, ShopCartInterface } from 'src/app/models/shopCart.model';

@Injectable({
  providedIn: 'root'
})
export class AddcartService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getShopCartAll(): Observable<ShopCartInterface[]>{
    return this.httpClient.get<ShopCartInterface[]>(`${environment.baseURLshopCart}/carts`)
  }
  addCart( data: ShopCart): Observable<ShopCart>{
    return this.httpClient.post<ShopCart>(`${environment.baseURLshopCart}/carts`, data)
  }
  getShopCartById(id: string): Observable<ShopCartInterface[]>{
    return this.httpClient.get<ShopCartInterface[]>(`${environment.baseURLshopCart}/carts/${id}`)
  }
  deleteCart(id: string): Observable<any>{
    return this.httpClient.delete<any>(`${environment.baseURLshopCart}/carts/${id}`)
  }

  makeCart(addProduct: ShopCart){
    let formData = new FormData()
    formData.append('userId', addProduct.userId)
    formData.append('amount', `${addProduct.amount}`)
    formData.append('cardStatus', addProduct.cardStatus)
    formData.append('productId', addProduct.productId)
    return formData
  }
}
