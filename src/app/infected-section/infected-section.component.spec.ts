import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectedSectionComponent } from './infected-section.component';

describe('InfectedSectionComponent', () => {
  let component: InfectedSectionComponent;
  let fixture: ComponentFixture<InfectedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfectedSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
