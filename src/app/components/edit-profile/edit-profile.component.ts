import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  isRegistered = false;

  userForm: FormGroup;
  constructor() {
    this.userForm = new FormGroup({
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
