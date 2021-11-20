import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidLocationComponent } from './covid-location.component';

describe('CovidLocationComponent', () => {
  let component: CovidLocationComponent;
  let fixture: ComponentFixture<CovidLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
