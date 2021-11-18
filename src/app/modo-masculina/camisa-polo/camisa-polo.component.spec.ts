import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaPoloComponent } from './camisa-polo.component';

describe('CamisaPoloComponent', () => {
  let component: CamisaPoloComponent;
  let fixture: ComponentFixture<CamisaPoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisaPoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisaPoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
