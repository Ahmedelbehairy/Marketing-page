import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { FeaturesComponent } from './features.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RegLogPageComponent } from './reg-log-page/reg-log-page.component';
import { ProfileComponent } from './profile/profile.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgParticlesModule } from 'ng-particles';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemComponent } from './item/item.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChangeProductsComponent } from './change-products/change-products.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
    declarations: [
        HomeComponent,
        RegisterComponent,
        LoginComponent,
        ProductsComponent,
        CartComponent,
        FeaturesComponent,
        RegLogPageComponent,
        ProfileComponent,
        ItemComponent,
        ChangeProductsComponent,
    ],
    exports: [
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ProductsComponent,
        CartComponent,
        FeaturesComponent,
        ProfileComponent,
        MatTooltipModule
    ],
    imports: [
        CommonModule,
        CoreModule,
        AppRoutingModule,
        RouterModule,
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        CarouselModule,
        NgParticlesModule,
        BrowserAnimationsModule,
        SharedModule,
        MatSidenavModule,
        MatTooltipModule,
    ]
})
export class FeaturesModule { }
