import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaTimeMascuComponent } from './camisa-time-mascu.component';

describe('CamisaTimeMascuComponent', () => {
  let component: CamisaTimeMascuComponent;
  let fixture: ComponentFixture<CamisaTimeMascuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisaTimeMascuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisaTimeMascuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
