import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFemininoComponent } from './home-feminino.component';

describe('HomeFemininoComponent', () => {
  let component: HomeFemininoComponent;
  let fixture: ComponentFixture<HomeFemininoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFemininoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFemininoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
