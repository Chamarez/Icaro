import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponse, User } from '../shared/models/user.interface';
import {catchError, map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient, private router: Router, private _snackBar: MatSnackBar){
      this.checkToken();

  }

  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData: User):Observable<UserResponse | void>{
    return this.http
    .post<UserResponse>(`${environment.API_URL}/auth/login`, authData)
    .pipe(
map((res:UserResponse)=>{
        this.saveToken(res.token);
        this.loggedIn.next(true);
        ///save username in local storage
        this.user(authData.username);
        ///save username in variable
/*         const userna =  authData.username
 */      return res;
      }),
      catchError((err)=>this.handleError(err))
      );
  }
  logout():void{
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(['/login'])

  }


  private checkToken():void{
    const userToken = localStorage.getItem('token');
    if(userToken != null){
    const isExpired = helper.isTokenExpired(userToken);
    isExpired ? this.logout() : this.loggedIn.next(true);
    } else{
    const isExpired = true;

    }
    // set userIsLoged = isExpired
  }
  private saveToken(token:string):void{
    localStorage.setItem('token', token);

  }
  private handleError(err: { messagge: any; }): Observable<never> {
    let errorMessage = 'an error ocurred registering data';
    if(err){
        errorMessage= `error: code ${err.messagge}`;


    }
    this.error()

      return throwError(errorMessage);
  }

  user(username: string){
    localStorage.setItem('username', username);

  }



  error(){
    this._snackBar.open('Usuario o Pasword ingresados son invalidos', '',{
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: 'bottom'
    })
  }


}
