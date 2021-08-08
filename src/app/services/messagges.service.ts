import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { NewMessage } from '../shared/models/messagges.interface';
import { Observable } from 'rxjs';

const helper = new JwtHelperService();
const user = localStorage.getItem('username');


@Injectable({
  providedIn: 'root'
})
export class MessaggesService {
  recibidos: object | undefined;
  enviados: object | undefined;
  constructor(private http:HttpClient, authSvc: AuthService) { }

  receivMessagges(){
    return this.http.get(`${environment.API_URL}/msj/adressee/"${user}"` );
    }



sendMessagges(){

    return this.http.get(`${environment.API_URL}/msj/sender/"${user}"` )

}

postMessage(newmsg: NewMessage):Observable<any>{

  return this.http
  .post(`${environment.API_URL}/msj`, newmsg)
}


}
