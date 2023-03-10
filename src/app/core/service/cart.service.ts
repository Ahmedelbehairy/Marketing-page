import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  createNewCart(model:any){
    this._HttpClient.post( 'https://fakestoreapi.com/carts' , model)
  }
}
