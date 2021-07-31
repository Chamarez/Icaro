import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sended',
  templateUrl: './sended.component.html',
  styleUrls: ['./sended.component.scss']
})
export class SendedComponent implements OnInit {
  rec  =
  {
    send: false,
    receiv: true,
    newmsj: false
  };
  env  =
  {
    send: false,
    receiv: false,
    newmsj: true
  };


  @Output() nuevo: EventEmitter<any> =  new EventEmitter<any>();

  @Output() recibir: EventEmitter<any> =  new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  received(){
    this.rec
    this.recibir.emit(this.rec);
    console.log('enviadofunciona')


  }

  newmsj(){

    this.env
    this.nuevo.emit(this.env);

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
