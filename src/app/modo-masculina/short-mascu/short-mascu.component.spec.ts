import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortMascuComponent } from './short-mascu.component';

describe('ShortMascuComponent', () => {
  let component: ShortMascuComponent;
  let fixture: ComponentFixture<ShortMascuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortMascuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortMascuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
