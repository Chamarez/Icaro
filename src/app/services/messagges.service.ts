import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { NewMessage } from '../shared/models/messagges.interface';
import { Observable } from 'rxjs';

const helper = new JwtHelperService();
const user = localStorage.getItem('username');
const token:any = localStorage.getItem('token');


@Injectable({
  providedIn: 'root'
})
export class MessaggesService {

  enviados: object | undefined;
  constructor(private http:HttpClient, authSvc: AuthService) {
   }

  receivMessagges():Observable<any>{
    return this.http.get(`${environment.API_URL}/msj/adressee/"${user}"`, {headers: new HttpHeaders({'auth': token})});
    }



sendMessagges(){

    return this.http.get(`${environment.API_URL}/msj/sender/"${user}"`, {headers: new HttpHeaders({'auth': token})})

}

postMessage(newmsg: NewMessage):Observable<any>{

  return this.http
  .post(`${environment.API_URL}/msj`, newmsg, {headers: new HttpHeaders({'auth': token})})
}

deleteMsgReceiv(msjId: number){
  return this.http.patch(`${environment.API_URL}/msj/deletereceived/${msjId}`,"", {headers: new HttpHeaders({'auth': token})})

}

deleteMsgSend(msjId: number){
  return this.http.patch(`${environment.API_URL}/msj/deletesender/${msjId}`, "",  {headers: new HttpHeaders({'auth': token})} )

}

}
