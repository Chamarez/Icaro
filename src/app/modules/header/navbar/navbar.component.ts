import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogged = false;

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authSvc.isLogged.subscribe((res) => (this.isLogged = res));
  }
  navegarHaciaRegistro(){
    this.router.navigate(['/register'])
  }
  navegarHaciaLogin(){
    this.router.navigate(['/login'])
  }
  navegarHaciaHome(){
    this.router.navigate(['/home'])
  }
  navegarHaciaMensajes(){

    this.router.navigate(['/inside'])

  }
  logOut(){
    this.authSvc.logout();
  }


}
