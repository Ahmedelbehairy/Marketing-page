import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  mainApi:string = 'https://fakestoreapi.com/' //Main API
  constructor(private _HttpClient: HttpClient) { }
  // all item
  getAllProducts(){
    return this._HttpClient.get(this.mainApi + 'products')
  }
  // name of item
  getAllCategories(){
    return this._HttpClient.get(this.mainApi + 'products/categories')
  }
  // get some product from product's name
  getProductByName(data:string){
    return this._HttpClient.get(this.mainApi + 'products/category/' + data)
  }
  //api for one product
  getOneProducts(id: string): Observable<any> {
    return this._HttpClient.get(this.mainApi + 'products/' +id)
  }
}

