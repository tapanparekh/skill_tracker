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
  {
    path: 'user-registration',
    loadChildren: () =>
      import(
        './components/user-registration/user-registration-routing.module'
      ).then((m) => m.UserRegistrationRoutingModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login-routing.module').then(
        (m) => m.LoginRoutingModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./components/user/user-routing.module').then(
        (m) => m.UserRoutingModule
      ),
  },
  {
    path: 'edit-profile',
    loadChildren: () =>
      import('./components/edit-profile/edit-profile-routing.module').then(
        (m) => m.EditProfileRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
