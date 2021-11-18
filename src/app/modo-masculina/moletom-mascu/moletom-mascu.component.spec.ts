import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoletomMascuComponent } from './moletom-mascu.component';

describe('MoletomMascuComponent', () => {
  let component: MoletomMascuComponent;
  let fixture: ComponentFixture<MoletomMascuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoletomMascuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoletomMascuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
