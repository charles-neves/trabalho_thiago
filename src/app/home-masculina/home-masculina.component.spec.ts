import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMasculinaComponent } from './home-masculina.component';

describe('HomeMasculinaComponent', () => {
  let component: HomeMasculinaComponent;
  let fixture: ComponentFixture<HomeMasculinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMasculinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMasculinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
