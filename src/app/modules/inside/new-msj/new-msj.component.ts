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
export class NewMsjComponent {
  sen  =
  {
    send: false,
    receiv: true,
    newmsj: false
  };
  @Output() recibir: EventEmitter<any> =  new EventEmitter<any>();

  composeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private msgSvc: MessaggesService) {
    this.composeForm = this.formBuilder.group({
      destinatario: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const sender:any= user;
    const addressee = this.composeForm.value.destinatario;
    const msjs = this.composeForm.value.mensaje;
    const msjData = {
      sender : sender,
      addressee: addressee,
      msjs : msjs


    }
    this.msgSvc.postMessage(msjData).subscribe(()=>{console.log(msjData)
    }, (err: HttpErrorResponse)=> {
      console.log(msjData)
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
    )}


  receiv(){
    this.sen
    this.recibir.emit(this.sen);

}



}



