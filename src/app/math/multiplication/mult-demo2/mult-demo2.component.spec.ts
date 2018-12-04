import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultDemo2Component } from './mult-demo2.component';

describe('MultDemo2Component', () => {
  let component: MultDemo2Component;
  let fixture: ComponentFixture<MultDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
