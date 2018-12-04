import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDemo1Component } from './sub-demo1.component';

describe('SubDemo1Component', () => {
  let component: SubDemo1Component;
  let fixture: ComponentFixture<SubDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
