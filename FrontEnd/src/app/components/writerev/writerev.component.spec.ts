import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterevComponent } from './writerev.component';

describe('WriterevComponent', () => {
  let component: WriterevComponent;
  let fixture: ComponentFixture<WriterevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriterevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriterevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
