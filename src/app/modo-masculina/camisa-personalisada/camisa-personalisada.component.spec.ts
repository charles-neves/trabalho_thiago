import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaPersonalisadaComponent } from './camisa-personalisada.component';

describe('CamisaPersonalisadaComponent', () => {
  let component: CamisaPersonalisadaComponent;
  let fixture: ComponentFixture<CamisaPersonalisadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisaPersonalisadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisaPersonalisadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
