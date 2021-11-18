import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntoFemiComponent } from './conjunto-femi.component';

describe('ConjuntoFemiComponent', () => {
  let component: ConjuntoFemiComponent;
  let fixture: ComponentFixture<ConjuntoFemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConjuntoFemiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjuntoFemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
