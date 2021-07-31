import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SendedComponent } from './sended/sended.component';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.scss']


})
export class InsideComponent implements  OnInit {

  send: any= false;
  receiv: any = true;
  newmsj: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showsend(enviar: any){
    let r=new Map(Object.entries(enviar));
    this.send = r.get('send');
    console.log(this.send);
    this.receiv = r.get('receiv');

  }




}

/* send(){
  this.sended = true;
  this.received = false;
  this.newmsj = false;
}

reciv(){
  this.sended = false;
  this.received = true;
  this.newmsj = false;
}
 */
