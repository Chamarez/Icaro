import { AppModule } from './../../app.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivedComponent } from './received/received.component';
import { SendedComponent } from './sended/sended.component';
import { HeaderModule } from '../header/header.module';
import { InsideComponent } from './inside.component';
import { InsideRoutingModule } from './inside-routing.module';



@NgModule({
  declarations: [
    ReceivedComponent,
    SendedComponent,
    InsideComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    InsideRoutingModule
  ],
  exports:[
    ReceivedComponent,
    SendedComponent,
    InsideComponent,
  ]
})
export class InsideModule { }