import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultPractComponent } from './mult-pract.component';

describe('MultPractComponent', () => {
  let component: MultPractComponent;
  let fixture: ComponentFixture<MultPractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultPractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultPractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
