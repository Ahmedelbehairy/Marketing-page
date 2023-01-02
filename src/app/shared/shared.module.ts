import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { UndefinedComponent } from './undefined/undefined.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { NgParticlesModule } from 'ng-particles';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    NavbarComponent,
    UndefinedComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    NgParticlesModule
  ],
  exports:[
    NavbarComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
