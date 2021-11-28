import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardrecetteComponent } from './cardrecette.component';

describe('CardrecetteComponent', () => {
  let component: CardrecetteComponent;
  let fixture: ComponentFixture<CardrecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardrecetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardrecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
