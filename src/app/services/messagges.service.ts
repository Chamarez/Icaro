import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { NewMessage } from '../shared/models/messagges.interface';
import { Observable } from 'rxjs';

const helper = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})
export class MessaggesService {
   user;
   token:any;

  enviados: object | undefined;
  constructor(private http:HttpClient, authSvc: AuthService,) {
    this.user = localStorage.getItem('username');
    this.token = localStorage.getItem('token');
   }

  receivMessagges():Observable<any>{
    return this.http.get(`${environment.API_URL}/msj/adressee/"${this.user}"`, {headers: new HttpHeaders({'auth': this.token})});
    }



sendMessagges(){

    return this.http.get(`${environment.API_URL}/msj/sender/"${this.user}"`, {headers: new HttpHeaders({'auth': this.token})})

}

postMessage(newmsg: NewMessage):Observable<any>{

  return this.http
  .post(`${environment.API_URL}/msj`, newmsg, {headers: new HttpHeaders({'auth': this.token})})
}

deleteMsgReceiv(msjId: number){
  return this.http.patch(`${environment.API_URL}/msj/deletereceived/${msjId}`,"", {headers: new HttpHeaders({'auth': this.token})})

}

deleteMsgSend(msjId: number){
  return this.http.patch(`${environment.API_URL}/msj/deletesender/${msjId}`, "",  {headers: new HttpHeaders({'auth': this.token})} )

}
getAllUsers(){

  return this.http.get(`${environment.API_URL}/users`, {headers: new HttpHeaders({'auth': this.token})})

}
}
