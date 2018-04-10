import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentEnqueryComponent } from './payment-enquery.component';

describe('PaymentEnqueryComponent', () => {
  let component: PaymentEnqueryComponent;
  let fixture: ComponentFixture<PaymentEnqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentEnqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentEnqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
