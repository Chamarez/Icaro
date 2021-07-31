import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]


    })
  }



  private buildForm() {
    this.form = new FormGroup({
      apellido: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      cpasword: new FormControl('', [Validators.required]),
    });
    this.form.valueChanges
    .subscribe(value => {
      console.log(value);
    });


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
