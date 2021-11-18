import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetaMascuComponent } from './camiseta-mascu.component';

describe('CamisetaMascuComponent', () => {
  let component: CamisetaMascuComponent;
  let fixture: ComponentFixture<CamisetaMascuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisetaMascuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisetaMascuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
