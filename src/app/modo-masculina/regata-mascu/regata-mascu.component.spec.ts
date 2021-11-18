import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegataMascuComponent } from './regata-mascu.component';

describe('RegataMascuComponent', () => {
  let component: RegataMascuComponent;
  let fixture: ComponentFixture<RegataMascuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegataMascuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegataMascuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
