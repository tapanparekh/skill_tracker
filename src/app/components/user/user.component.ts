import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(private router: Router){ }
  register = () => {

    const navigationDetails: string[] = ['/user-registration'];
    this.router.navigate(navigationDetails);
  };

  searchPeople = () => {
    const navigationDetails: string[] = ['/search-skill'];
    this.router.navigate(navigationDetails);
  };

  editProfile = () => {
    const navigationDetails: string[] = ['/edit-profile'];
    this.router.navigate(navigationDetails);
  };
}
