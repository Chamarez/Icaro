import { EventEmitter, Input, Component, OnInit, Output, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MessaggesService } from 'src/app/services/messagges.service';


const user = localStorage.getItem('username');

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss']
})
export class ReceivedComponent implements OnInit {
  count: number = 0;
  msg: any = [];
  usuarioMostrar:any=[];
  displayedColumns: string[] = ['id', 'sender', 'msjs', 'date'];
  dataSource!:MatTableDataSource<any>;


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

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    @Output() enviar: EventEmitter<any> =  new EventEmitter<any>();
    @Output() nuevo: EventEmitter<any> =  new EventEmitter<any>();
  constructor(private receivSvc: MessaggesService) {

  }

  ngOnInit(): void {

    this.receivSvc.receivMessagges().subscribe((data) =>{
      this.msg = data;

      for (var msg of this.msg) {
        this.count = this.count + 1;
        msg.id = this.count;
   }
      this.dataSource =  new MatTableDataSource(this.msg);
      this.dataSource.paginator = this.paginator;

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


    sended(){
      this.sen
      this.enviar.emit(this.sen);

  }
    newmsj(){

      this.env
      this.nuevo.emit(this.env);

}




}
