import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchSkillRoutingModule } from './search-skill-routing.module';
import { SearchSkillComponent } from './search-skill.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';

@NgModule({
  declarations: [SearchSkillComponent, SearchComponent],
  imports: [CommonModule, FormsModule, SearchSkillRoutingModule],
})
export class SearchSkillModule {}
