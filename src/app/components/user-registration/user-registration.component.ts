import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent {
  isRegistered = false;

  userForm: FormGroup;
  constructor() {
    this.userForm = new FormGroup({
      UserFirstName: new FormControl(),
      UserLastName: new FormControl(),
    });
  }

  techStack = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: '.Net' },
    { id: 4, name: 'Node JS' },
    { id: 5, name: 'Java' },
  ];

  onSubmit = () => {
    this.userForm.reset();
    this.isRegistered = true;
  };
}
