import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiviPractComponent } from './divi-pract.component';

describe('DiviPractComponent', () => {
  let component: DiviPractComponent;
  let fixture: ComponentFixture<DiviPractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiviPractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiviPractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
