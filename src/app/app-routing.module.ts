import { InsideModule } from './modules/inside/inside.module';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/home/login/login.component';
import { RegisterComponent } from './modules/home/register/register.component';
import { CheckLoginGuard } from './shared/guard/check-login.guard';
import { InsideComponent } from './modules/inside/inside.component';

const routes: Routes = [
  {path:'home', component: LoginComponent},
  {path: 'login', component: LoginComponent,},
  {path:'register', component: RegisterComponent},
  {path:'inside', loadChildren:()=> import('./modules/inside/inside.module').then((x)=> x.InsideModule),  canActivate: [CheckLoginGuard]
},
  {path: "", redirectTo:"home", pathMatch: 'full'},
  {path: '**', redirectTo:"home", pathMatch: 'full'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
