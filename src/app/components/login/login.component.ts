import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private commonService: CommonService) {}

  register = () => {
    const navigationDetails: string[] = ['/user-registration'];
    this.router.navigate(navigationDetails);
  };

  loginDev = () => {
    const navigationDetails: string[] = ['/user'];
    this.router.navigate(navigationDetails);
    this.commonService.isManager = false;
  };

  loginManager = () => {
    const navigationDetails: string[] = ['/dashboard/manager'];
    this.router.navigate(navigationDetails);
    this.commonService.isManager = true;
  };
}
