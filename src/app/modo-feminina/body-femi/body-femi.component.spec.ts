import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFemiComponent } from './body-femi.component';

describe('BodyFemiComponent', () => {
  let component: BodyFemiComponent;
  let fixture: ComponentFixture<BodyFemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyFemiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyFemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
