import { AppModule } from './../../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MobileNavbarComponent } from './mobileNavbar/mobileNavbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MobileNavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    NavbarComponent,
    MobileNavbarComponent

  ],
})
export class HeaderModule { }
