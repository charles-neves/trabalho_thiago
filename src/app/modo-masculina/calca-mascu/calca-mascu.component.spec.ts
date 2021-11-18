import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcaMascuComponent } from './calca-mascu.component';

describe('CalcaMascuComponent', () => {
  let component: CalcaMascuComponent;
  let fixture: ComponentFixture<CalcaMascuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcaMascuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcaMascuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
