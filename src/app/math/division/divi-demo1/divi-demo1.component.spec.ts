import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiviDemo1Component } from './divi-demo1.component';

describe('DiviDemo1Component', () => {
  let component: DiviDemo1Component;
  let fixture: ComponentFixture<DiviDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiviDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiviDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
