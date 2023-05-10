import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { employeesData } from '../db/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  public id: string = '';
  public employeeDetails: any = {};
  isRequestSent = false;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      debugger;
      this.employeeDetails = employeesData.filter((item: any) => {
        debugger;
        return item.id.toString() === this.id;
      })[0];
    });
  }

  onSubmit() {
    this.isRequestSent = true;
  }
}
