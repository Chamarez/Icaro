import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    this.composeForm = this.formBuilder.group({
      destinatario: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('Your message : ', this.composeForm.value);
  }


  receiv(){
    this.sen
    this.recibir.emit(this.sen);

}



}



