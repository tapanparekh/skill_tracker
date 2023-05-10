import { Component, Input, OnInit } from '@angular/core';
import { employeesData } from '../db/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private route: Router) {}
  @Input() searchBase = 'skills';
  public searchText: any = '';
  public employees: any[] = employeesData;

  public onChange($event: string) {
    if (!$event) {
      this.employees = employeesData;
      return;
    }
    this.employees = employeesData.filter((employee: any) => {
      if (this.searchBase === 'skills') {
        return employee[this.searchBase]
          .map((item: string) => item.toLowerCase())
          .includes($event.toLowerCase());
      } else {
        return employee[this.searchBase].toLowerCase() === $event.toLowerCase();
      }
    });
  }

  public onView(id: number) {
    this.route.navigateByUrl('employee-details/' + id);
  }
}
