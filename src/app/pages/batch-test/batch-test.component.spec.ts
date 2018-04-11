import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchTestComponent } from './batch-test.component';

describe('BatchTestComponent', () => {
  let component: BatchTestComponent;
  let fixture: ComponentFixture<BatchTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
