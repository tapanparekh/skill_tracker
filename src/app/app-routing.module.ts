import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'search-skill', loadChildren: () => import('./search-skill/search-skill.module').then(m => m.SearchSkillModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
