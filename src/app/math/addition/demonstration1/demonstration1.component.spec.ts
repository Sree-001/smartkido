import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demonstration1Component } from './demonstration1.component';

describe('Demonstration1Component', () => {
  let component: Demonstration1Component;
  let fixture: ComponentFixture<Demonstration1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demonstration1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demonstration1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
