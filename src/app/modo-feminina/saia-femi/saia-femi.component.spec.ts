import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiaFemiComponent } from './saia-femi.component';

describe('SaiaFemiComponent', () => {
  let component: SaiaFemiComponent;
  let fixture: ComponentFixture<SaiaFemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaiaFemiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiaFemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
