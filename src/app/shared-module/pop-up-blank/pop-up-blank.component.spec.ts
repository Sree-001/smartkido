import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpBlankComponent } from './pop-up-blank.component';

describe('PopUpBlankComponent', () => {
  let component: PopUpBlankComponent;
  let fixture: ComponentFixture<PopUpBlankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpBlankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
