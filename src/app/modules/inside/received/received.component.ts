import { HttpErrorResponse } from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';
import { EventEmitter, Input, Component, OnInit, Output, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MessaggesService } from 'src/app/services/messagges.service';
import { ConfirmDialogComponent } from '../confirmDialog/confirmDialog.component';

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


  constructor(private receivSvc: MessaggesService, public dialog: MatDialog) {

  }

  ngOnInit(): void {

    this.receivSvc.receivMessagges().subscribe((data) =>{
      this.msg = data;
      ///  for invert numbers
      var arraylegth = this.msg.length
       for (var msg of this.msg) {
//// Numbers inverted
          msg.id = arraylegth;
          arraylegth = arraylegth -1

/* if i want diferent order
this.count = this.count + 1;
msg.id = this.count; */


   }
      this.msg = this.msg.reverse()
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

deleteMsj(element:number){
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    width: '40vh',
    data: 'Esta seguro que desea eliminar'
  });
  dialogRef.afterClosed().subscribe(res =>{
    console.log(res);
    const msgToDelete = this.msg[element]
    if(res){
      alert('Mensaje eliminado')
    //how press yes procede deletion
      this.receivSvc.deleteMsgReceiv(msgToDelete.msjId).subscribe(()=>{console.log(msgToDelete.msjId)
      }, (err: HttpErrorResponse)=> {
        console.log(msgToDelete.msjId)
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
      )



    }


  })


}


}
export class DialogContentExampleDialog {}
