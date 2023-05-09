import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSkillComponent } from './search-skill.component';

describe('SearchSkillComponent', () => {
  let component: SearchSkillComponent;
  let fixture: ComponentFixture<SearchSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSkillComponent]
    });
    fixture = TestBed.createComponent(SearchSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
