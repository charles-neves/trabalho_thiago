import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaLoncaComponent } from './camisa-lonca.component';

describe('CamisaLoncaComponent', () => {
  let component: CamisaLoncaComponent;
  let fixture: ComponentFixture<CamisaLoncaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisaLoncaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisaLoncaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
