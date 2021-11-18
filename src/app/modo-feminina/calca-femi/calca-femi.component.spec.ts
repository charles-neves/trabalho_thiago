import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcaFemiComponent } from './calca-femi.component';

describe('CalcaFemiComponent', () => {
  let component: CalcaFemiComponent;
  let fixture: ComponentFixture<CalcaFemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcaFemiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcaFemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
