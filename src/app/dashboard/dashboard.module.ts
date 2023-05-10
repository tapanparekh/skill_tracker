import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [ManagerDashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
