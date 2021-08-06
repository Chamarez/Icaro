import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { UserRegister} from '../../../shared/models/user.interface';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private authSvc  : RegisterService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.email ]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      name: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      passwordconfirm: ['',[Validators.required]],
      country: ['',[Validators.required]],
      city: ['',[Validators.required]],


    });



  }
  ngOnInit(): void {}

  isMobile(){
    return(
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
        );}


  onSubmit() {
        const username = this.form.value.username;
        const password = this.form.value.password;
        const role = "reader";
        const country = this.form.value.country;
        const city = this.form.value.city;
        const userData = {
          username:username,
          password:password,
          role: role,
          country: country,
          city: city
          }
        this.authSvc.register(userData).subscribe(()=>{console.log(userData)
        }, (err: HttpErrorResponse)=> {
          if (err.error instanceof Error) {
            console.log("Client-side error");
            console.log(err);
          }else if (err.status == 200){
            alert("Usuario creado");

          }
          else {
            console.log(err.error.message);
          }

        }
        )
        }
}



