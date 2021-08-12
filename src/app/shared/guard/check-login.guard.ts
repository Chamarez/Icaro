import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CheckLoginGuard implements CanActivate {
  constructor(private authSvc: AuthService){}
  canActivate():Observable<boolean>{
    return this.authSvc.isLogged.pipe(
      take(1),
    ///could be !isLogged
      map( (isLogged:boolean)=> isLogged)
    )
  }

}
