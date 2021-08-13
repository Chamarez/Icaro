import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessaggesService } from 'src/app/services/messagges.service';
const user = localStorage.getItem('username');

@Component({
  selector: 'app-new-msj',
  templateUrl: './new-msj.component.html',
  styleUrls: ['./new-msj.component.scss']
})
export class NewMsjComponent  implements OnInit{

  sen  =
  {
    send: false,
    receiv: true,
    newmsj: false
  };
  user:any;
  token:any;
  users:any = [];
  arrayUsers:any = [];
  @Output() recibir: EventEmitter<any> =  new EventEmitter<any>();

  composeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private msgSvc: MessaggesService) {
    this.composeForm = this.formBuilder.group({
      destinatario: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
    });
  }
  ngOnInit(){
    this.user = localStorage.getItem('username');
    this.token = localStorage.getItem('token');
    this.getAllUsers()
    console.log(this.user)
  }
  onSubmit() {
    const sender:any= this.user;
    const addressee = this.composeForm.value.destinatario;
    const msjs = this.composeForm.value.mensaje;
    const msjData = {
      sender : sender,
      addressee: addressee,
      msjs : msjs


    }
    this.msgSvc.postMessage(msjData, this.token).subscribe(()=>{console.log(msjData)
    }, (err: HttpErrorResponse)=> {
      if (err.error instanceof Error) {
        console.log("Client-side error");
        console.log(err);
      }else if (err.status == 200){
        alert("Su mensaje fue enviado");

      }
      else {
        console.log(err.error.message);
      }
      this.receiv()
    }
    )}


  receiv(){
    this.sen
    this.recibir.emit(this.sen);

}

getAllUsers(){
  this.msgSvc.getAllUsers(this.token).subscribe((data:any) =>{
  this.users = data
  var arraylegth = this.users.length

   for(let i=0; i<arraylegth ; i++){
     this.arrayUsers[i] = this.users[i].username
   }


  });

}

}



