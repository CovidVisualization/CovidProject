import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCovidComponent } from './check-covid.component';

describe('CheckCovidComponent', () => {
  let component: CheckCovidComponent;
  let fixture: ComponentFixture<CheckCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
