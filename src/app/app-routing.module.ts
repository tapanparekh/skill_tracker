import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search-skill',
    loadChildren: () =>
      import('./search-skill/search-skill.module').then(
        (m) => m.SearchSkillModule
      ),
  },
  {
    path: 'user-registration',
    loadChildren: () =>
      import(
        './components/user-registration/user-registration-routing.module'
      ).then((m) => m.UserRegistrationRoutingModule),
  },
  {
    path: 'employee-details/:id',
    loadChildren: () =>
      import('./employee-details/employee-details.module').then(
        (m) => m.EmployeeDetailsModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard-routing.module').then(
        (m) => m.DashboardRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
