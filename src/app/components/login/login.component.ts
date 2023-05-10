import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router){ }

  register = () => {
    const navigationDetails: string[] = ['/user-registration'];
    this.router.navigate(navigationDetails);
  };

  loginDev = () => {
    const navigationDetails: string[] = ['/user'];
    this.router.navigate(navigationDetails);
  };

  loginManager = () => {
    const navigationDetails: string[] = ['/dashboard/manager'];
    this.router.navigate(navigationDetails);
  };
}
