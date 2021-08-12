import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mobileNavbar',
  templateUrl: './mobileNavbar.component.html',
  styleUrls: ['./mobileNavbar.component.scss']
})
export class MobileNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
}
