import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { employeesData } from '../db/employee';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  public id: string = '';
  public employeeDetails: any = {};
  public isManager = false;
  isRequestSent = false;
  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      debugger;
      this.employeeDetails = employeesData.filter((item: any) => {
        debugger;
        return item.id.toString() === this.id;
      })[0];
    });
    this.isManager = this.commonService.isManager;
  }

  onSubmit() {
    this.isRequestSent = true;
  }
}
