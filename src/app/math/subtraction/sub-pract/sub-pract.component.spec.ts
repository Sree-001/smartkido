import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPractComponent } from './sub-pract.component';

describe('SubPractComponent', () => {
  let component: SubPractComponent;
  let fixture: ComponentFixture<SubPractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
