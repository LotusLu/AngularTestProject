import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFeeComponent } from './paymentFee.component';

describe('PaymentComponent', () => {
  let component: PaymentFeeComponent;
  let fixture: ComponentFixture<PaymentFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
