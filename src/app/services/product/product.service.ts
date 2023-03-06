import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductElement, Product } from '../../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'}); 

  constructor(
    private httpClient:HttpClient ,
  ) { }

  getProducts(): Observable<ProductElement[]> {
    return this.httpClient.get<ProductElement[]>(`${environment.baseURLProduct}/product`)
  }
  oneProduct(id: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.baseURLProduct}/product/${id}`)
  }
  editProduct(id: string, product: ProductElement) {
    return this.httpClient.put<ProductElement>(`${environment.baseURLProduct}/product/${id}`, product)
  }
  deleteProduct(id: string): Observable<any>{
    return this.httpClient.delete<any>(`${environment.baseURLProduct}/product/${id}`)
  }

  makeFormDataProduct(product: ProductElement){

  }
}
