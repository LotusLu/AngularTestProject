import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateEnqueryComponent } from './rate-enquery.component';

describe('RateEnqueryComponent', () => {
  let component: RateEnqueryComponent;
  let fixture: ComponentFixture<RateEnqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateEnqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateEnqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
