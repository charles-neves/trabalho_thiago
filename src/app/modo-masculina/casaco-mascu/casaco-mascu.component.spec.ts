import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasacoMascuComponent } from './casaco-mascu.component';

describe('CasacoMascuComponent', () => {
  let component: CasacoMascuComponent;
  let fixture: ComponentFixture<CasacoMascuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasacoMascuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasacoMascuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
