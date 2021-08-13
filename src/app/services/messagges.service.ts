import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { NewMessage } from '../shared/models/messagges.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MessaggesService {
   helper = new JwtHelperService();


  enviados: object | undefined;
  constructor(private http:HttpClient, authSvc: AuthService,) {

   }

  receivMessagges(user:any, token:any):Observable<any>{
    return this.http.get(`${environment.API_URL}/msj/adressee/"${user}"`, {headers: new HttpHeaders({'auth': token})});
    }



sendMessagges(user:any, token:any){

    return this.http.get(`${environment.API_URL}/msj/sender/"${user}"`, {headers: new HttpHeaders({'auth': token})})

}

postMessage(newmsg: NewMessage, token:any):Observable<any>{

  return this.http
  .post(`${environment.API_URL}/msj`, newmsg, {headers: new HttpHeaders({'auth': token})})
}

deleteMsgReceiv(msjId: number, token:any){
  return this.http.patch(`${environment.API_URL}/msj/deletereceived/${msjId}`,"", {headers: new HttpHeaders({'auth': token})})

}

deleteMsgSend(msjId:number, token:any){
  return this.http.patch(`${environment.API_URL}/msj/deletesender/${msjId}`, "",  {headers: new HttpHeaders({'auth': token})} )

}
getAllUsers(token:any){

  return this.http.get(`${environment.API_URL}/users`, {headers: new HttpHeaders({'auth': token})})

}
}
