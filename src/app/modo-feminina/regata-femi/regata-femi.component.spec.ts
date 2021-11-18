import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegataFemiComponent } from './regata-femi.component';

describe('RegataFemiComponent', () => {
  let component: RegataFemiComponent;
  let fixture: ComponentFixture<RegataFemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegataFemiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegataFemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
