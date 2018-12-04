import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiviDemo2Component } from './divi-demo2.component';

describe('DiviDemo2Component', () => {
  let component: DiviDemo2Component;
  let fixture: ComponentFixture<DiviDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiviDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiviDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
