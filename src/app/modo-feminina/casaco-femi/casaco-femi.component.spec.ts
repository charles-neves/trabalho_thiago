import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasacoFemiComponent } from './casaco-femi.component';

describe('CasacoFemiComponent', () => {
  let component: CasacoFemiComponent;
  let fixture: ComponentFixture<CasacoFemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasacoFemiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasacoFemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
