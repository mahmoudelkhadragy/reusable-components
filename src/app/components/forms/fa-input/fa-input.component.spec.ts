import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaInputComponent } from './fa-input.component';

describe('FaInputComponent', () => {
  let component: FaInputComponent;
  let fixture: ComponentFixture<FaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
