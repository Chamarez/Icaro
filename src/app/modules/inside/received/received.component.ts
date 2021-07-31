import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss']
})
export class ReceivedComponent implements OnInit {

  sen  =
    {
      send: true,
      receiv: false,
      newmsj: false,
    };

    env  =
    {
      send: false,
      receiv: false,
      newmsj: true
    };


    @Output() enviar: EventEmitter<any> =  new EventEmitter<any>();
    @Output() nuevo: EventEmitter<any> =  new EventEmitter<any>();

  constructor() {

  }

  ngOnInit(): void {
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


    sended(){
      this.sen
      this.enviar.emit(this.sen);

  }
    newmsj(){

      this.env
      this.nuevo.emit(this.env);

}



}
