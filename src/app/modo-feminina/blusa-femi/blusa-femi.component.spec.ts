import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlusaFemiComponent } from './blusa-femi.component';

describe('BlusaFemiComponent', () => {
  let component: BlusaFemiComponent;
  let fixture: ComponentFixture<BlusaFemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlusaFemiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlusaFemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
