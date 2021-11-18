import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaMascuComponent } from './camisa-mascu.component';

describe('CamisaMascuComponent', () => {
  let component: CamisaMascuComponent;
  let fixture: ComponentFixture<CamisaMascuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisaMascuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisaMascuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
