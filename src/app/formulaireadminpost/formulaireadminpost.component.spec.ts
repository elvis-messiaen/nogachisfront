import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireadminpostComponent } from './formulaireadminpost.component';

describe('FormulaireadminpostComponent', () => {
  let component: FormulaireadminpostComponent;
  let fixture: ComponentFixture<FormulaireadminpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireadminpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireadminpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
