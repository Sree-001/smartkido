import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demonstration2Component } from './demonstration2.component';

describe('Demonstration2Component', () => {
  let component: Demonstration2Component;
  let fixture: ComponentFixture<Demonstration2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demonstration2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demonstration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
