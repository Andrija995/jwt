import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'auth.guard';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';


export const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'signup', component: SignupComponent},
{path: 'login', component: LoginComponent},

{path: 'admindashboard', component: AdmindashboardComponent, canActivate: [AuthGuard] },
{path: 'userdashboard', component: UserdashboardComponent, canActivate: [AuthGuard] },

{path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
