import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  error: string = '';

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  // function to check for your data from api and send it
  onSubmit(item: any) {
    if (item.value) {
      this._AuthService.registerUserDetails(item.value).subscribe((res) => {
        if (res.success == true) {
          this._Router.navigate(['/reg-log-page/login'])
        } else {
          this.error = res.error.email
        }
      })
    }
  }
}
