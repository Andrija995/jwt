import { Component } from '@angular/core';
import {LoginAuthService} from './login-auth.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spring-security';
  public currentStatus: any;

  constructor(private authService: LoginAuthService, private router: Router){
      this.currentStatus = this.authService.getStatus().subscribe(currentStatus => {
        this.currentStatus = currentStatus;
      })
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);

  }
 
}
