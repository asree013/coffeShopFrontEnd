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
  getOneProduct(id: string): Observable<Product>{
    return this.httpClient.get<Product>(`${environment.baseURLProduct}/product/${id}`)
  }
  createProduct(product: Product): Observable<Product[]>{
    return this.httpClient.post<Product[]>(`${environment.baseURLProduct}/product`, this.makeFormDataProduct(product))
  }
  editProduct(id: any, product: Product) {
    return this.httpClient.put<Product>(`${environment.baseURLProduct}/product/${id}`, this.makeFormDataProduct(product))
  }
  deleteProduct(id: string): Observable<any>{
    return this.httpClient.delete<any>(`${environment.baseURLProduct}/product/${id}`)
  }

  makeFormDataProduct(product: Product){
    let formData = new FormData()
    formData.append('name', product.name)
    formData.append('price', `${product.price}`)
    formData.append('stock', `${product.stock}`)
    formData.append('catagory', product.catagory)
    formData.append('detail', product.detail)
    if(product.image) {
      formData.append('photo', product.image)
    }
    return formData
  }
}
