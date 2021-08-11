import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {AuthService} from '../../../auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;
  user= false;

  constructor(private authSvc: AuthService, private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {


}
  ingresar() {
    const usuario= this.form.value.usuario;
    const password = this.form.value.password;
    const userData = {
      username:usuario,
      password:password
    }
    this.authSvc.login(userData).subscribe((res)=>
    { if(res){
      this.router.navigate(['inside']);
    }
  });
  }

  error(){
    this._snackBar.open('Usuario o Pasword ingresados son invalidos', '',{
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: 'bottom'
    })
  }

  isMobile(){
    return(
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
        );}
}


