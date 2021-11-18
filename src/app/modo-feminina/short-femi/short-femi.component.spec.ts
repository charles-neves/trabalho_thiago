import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortFemiComponent } from './short-femi.component';

describe('ShortFemiComponent', () => {
  let component: ShortFemiComponent;
  let fixture: ComponentFixture<ShortFemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortFemiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortFemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
