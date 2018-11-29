import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscendingComponent } from './ascending.component';

describe('AscendingComponent', () => {
  let component: AscendingComponent;
  let fixture: ComponentFixture<AscendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
