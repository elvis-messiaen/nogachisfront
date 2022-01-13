import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreservationsComponent } from './preservations.component';

describe('PreservationsComponent', () => {
  let component: PreservationsComponent;
  let fixture: ComponentFixture<PreservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
