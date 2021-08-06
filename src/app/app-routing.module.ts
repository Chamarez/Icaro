import { InsideModule } from './modules/inside/inside.module';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/home/login/login.component';
import { RegisterComponent } from './modules/home/register/register.component';
import { CheckLoginGuard } from './shared/guard/check-login.guard';

const routes: Routes = [
  {path:'home', component: LoginComponent},
  {path: 'login', component: LoginComponent, canActivate: [CheckLoginGuard]},

  {path:'register', component: RegisterComponent, canActivate: [CheckLoginGuard]},
  {path:'inside', loadChildren:()=> import('./modules/inside/inside.module').then((x)=> x.InsideModule),

},
  {path: "", redirectTo:"home", pathMatch: 'full'},
  {path: '**', redirectTo:"home", pathMatch: 'full'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
