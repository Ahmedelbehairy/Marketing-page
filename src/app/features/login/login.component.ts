import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: string = ''
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  // function to check for your data from api to login in
  onSubmit(item: any) {
    if (item.value) {
      this._AuthService.loginUserDetails(item.value).subscribe((res) => {
        if (res.success == true) {
          localStorage.setItem('userData', res.token);
          this._AuthService.getUserDataFromLocal();
          this._Router.navigate(['/home']);
        }
      }, error => {
        this.error = 'email or password are invalid'
      })
    }
  }
}
