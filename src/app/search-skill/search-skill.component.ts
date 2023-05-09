import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-skill',
  templateUrl: './search-skill.component.html',
  styleUrls: ['./search-skill.component.scss'],
})
export class SearchSkillComponent {
  public searchBase = 'skills';
  public searchText: any = '';
}
