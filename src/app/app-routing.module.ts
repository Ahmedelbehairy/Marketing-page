import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { CartComponent } from './features/cart/cart.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { ProfileComponent } from './features/profile/profile.component';
import { RegLogPageComponent } from './features/reg-log-page/reg-log-page.component';
import { RegisterComponent } from './features/register/register.component';
import { UndefinedComponent } from './shared/undefined/undefined.component';

const routes: Routes = [
  { path: '',redirectTo: 'home' ,pathMatch:'full'},
  { path: 'home',canActivate:[AuthGuard], component: HomeComponent },
  { path:'reg-log-page' ,component:RegLogPageComponent ,children:
  [
    { path: 'reg-log-page', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
  ]
  },
  { path: 'profile' , canActivate: [AuthGuard] ,component:ProfileComponent},
  { path: 'cart', canActivate: [AuthGuard], component: CartComponent },
  { path: '**', component: UndefinedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
