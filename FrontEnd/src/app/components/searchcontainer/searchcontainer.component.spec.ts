import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcontainerComponent } from './searchcontainer.component';

describe('SearchcontainerComponent', () => {
  let component: SearchcontainerComponent;
  let fixture: ComponentFixture<SearchcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
