import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CheckLoginGuard } from 'src/app/shared/guard/check-login.guard';
import { SendedComponent } from './sended/sended.component';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.scss']


})
export class InsideComponent implements  OnInit {

  send: any= false;
  receiv: any = true;
  newmsj: any = false;

  constructor( ) { }

  ngOnInit(): void {}

  showsend(enviar: any){
    let r=new Map(Object.entries(enviar));
    this.send = r.get('send');
    this.receiv = r.get('receiv');
    this.newmsj = r.get('newmsj');

  }
  showreceived(recibir: any){
    let r=new Map(Object.entries(recibir));
    this.send = r.get('send');
    this.receiv = r.get('receiv');
    this.newmsj = r.get('newmsj');


  }

  shownew(nuevo: any){
    let r=new Map(Object.entries(nuevo));
    this.send = r.get('send');
    this.receiv = r.get('receiv');
    this.newmsj = r.get('newmsj');
    console.log(this.newmsj)


  }



}
