import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponse, User } from '../shared/models/user.interface';
import {catchError, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient){}

  login(authData: User):Observable<UserResponse | void>{
    return this.http
    .post<UserResponse>(`${environment.API_URL}/auth/login`, authData)
    .pipe(
      map((res:UserResponse)=>{
        console.log('Res->', res);
      }),
      catchError((err)=>this.handleError(err))
      );
  }
  logout():void{}
  private readToken():void{}
  private saveToken():void{}
  private handleError(err: { messagge: any; }): Observable<never> {
    let errorMessage = 'an error ocurred retriving data';
    if(err){
        errorMessage= `error: code ${err.messagge}`;


    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
