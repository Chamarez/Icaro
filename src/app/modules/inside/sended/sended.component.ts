import { EventEmitter, Input, Component, OnInit, Output, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MessaggesService } from 'src/app/services/messagges.service';

@Component({
  selector: 'app-sended',
  templateUrl: './sended.component.html',
  styleUrls: ['./sended.component.scss']
})
export class SendedComponent implements OnInit {
  count: number = 0;
  msg: any = [];
  usuarioMostrar:any=[];
  displayedColumns: string[] = ['id', 'addressee', 'msjs', 'date'];
  dataSource!:MatTableDataSource<any>;

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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Output() nuevo: EventEmitter<any> =  new EventEmitter<any>();

  @Output() recibir: EventEmitter<any> =  new EventEmitter<any>();

  constructor(private sendSvc: MessaggesService) { }

  ngOnInit(): void {
    this.sendSvc.sendMessagges().subscribe((data) =>{
      this.msg = data;

      for (var msg of this.msg) {
        this.count = this.count + 1;
        msg.id = this.count;
   }
      this.dataSource =  new MatTableDataSource(this.msg);
      this.dataSource.paginator = this.paginator;

    });

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
