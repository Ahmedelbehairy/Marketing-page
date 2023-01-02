import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    // check for local storage before refresh
    if (localStorage.getItem('userData') != null){
      this.getUserDataFromLocal()
    }
  }
  // local storage
  userData = new BehaviorSubject(null);
  // function to set data in local storage
  getUserDataFromLocal() {
    let userToken = JSON.stringify(localStorage.getItem('userData'))
    this.userData.next(jwtDecode(userToken))
    console.log(userToken);
  }
  // function to remove data in local storage
  logOut() {
    localStorage.removeItem('userData');
    localStorage.removeItem('cart');
    this.userData.next(null)
    this._Router.navigate(['/reg-log-page/login'])
  }
  // api for register
  registerUserDetails(formData: any): Observable<any> {
    return this._HttpClient.post(`https://dev.lun.sa/Admin/api/register`, formData)
  }
  // api for login
  loginUserDetails(userData: any): Observable<any> {
    return this._HttpClient.post(`https://dev.lun.sa/Admin/api/login`, userData)
  }
}
