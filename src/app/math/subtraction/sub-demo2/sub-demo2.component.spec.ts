import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDemo2Component } from './sub-demo2.component';

describe('SubDemo2Component', () => {
  let component: SubDemo2Component;
  let fixture: ComponentFixture<SubDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
