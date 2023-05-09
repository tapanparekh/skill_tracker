import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchSkillComponent } from './search-skill.component';

const routes: Routes = [{ path: '', component: SearchSkillComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchSkillRoutingModule { }
