import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestidoFemiComponent } from './vestido-femi.component';

describe('VestidoFemiComponent', () => {
  let component: VestidoFemiComponent;
  let fixture: ComponentFixture<VestidoFemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestidoFemiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestidoFemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
