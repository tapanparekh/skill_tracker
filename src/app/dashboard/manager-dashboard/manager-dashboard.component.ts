import { Component } from '@angular/core';
import { cards } from '../../db/dashboard-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss'],
})
export class ManagerDashboardComponent {
  constructor(private route: Router) {}
  cards: any[] = [
    { title: 'IT', employeeCount: 10000 },
    { title: 'QA', employeeCount: 3000 },
    { title: 'Salse', employeeCount: 2000 },
  ];

  onRouteClick() {
    this.route.navigate(['/search-skill']);
  }
}
