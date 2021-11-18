import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacacaoFemiComponent } from './macacao-femi.component';

describe('MacacaoFemiComponent', () => {
  let component: MacacaoFemiComponent;
  let fixture: ComponentFixture<MacacaoFemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacacaoFemiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacacaoFemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
