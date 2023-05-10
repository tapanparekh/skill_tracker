import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'search-skill', loadChildren: () => import('./search-skill/search-skill.module').then(m => m.SearchSkillModule) },
{ path: 'user-registration', loadChildren: () => import('./components/user-registration/user-registration-routing.module').then(m => m.UserRegistrationRoutingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
