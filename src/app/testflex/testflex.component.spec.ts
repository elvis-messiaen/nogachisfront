import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestflexComponent } from './testflex.component';

describe('TestflexComponent', () => {
  let component: TestflexComponent;
  let fixture: ComponentFixture<TestflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestflexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
