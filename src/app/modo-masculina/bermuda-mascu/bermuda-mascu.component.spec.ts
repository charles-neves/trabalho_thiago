import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BermudaMascuComponent } from './bermuda-mascu.component';

describe('BermudaMascuComponent', () => {
  let component: BermudaMascuComponent;
  let fixture: ComponentFixture<BermudaMascuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BermudaMascuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BermudaMascuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
