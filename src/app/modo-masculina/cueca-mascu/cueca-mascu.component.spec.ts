import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuecaMascuComponent } from './cueca-mascu.component';

describe('CuecaMascuComponent', () => {
  let component: CuecaMascuComponent;
  let fixture: ComponentFixture<CuecaMascuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuecaMascuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuecaMascuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
