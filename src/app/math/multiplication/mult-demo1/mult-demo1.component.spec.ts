import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultDemo1Component } from './mult-demo1.component';

describe('MultDemo1Component', () => {
  let component: MultDemo1Component;
  let fixture: ComponentFixture<MultDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
