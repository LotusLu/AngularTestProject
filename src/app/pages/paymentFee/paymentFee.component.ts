import { Component, OnInit } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { StartupService } from '../../share/service/startup.service';
import { AlertService } from '../../share/service/alert.service';
import { Handle } from '../../share/handle/Handle.service';
import { Const } from '../../share/constant/const';
import { PaymentEnqueryData } from '../payment-enquery/payment-enquery-data/payment-enquery-data.module';
import { FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-paymentFee',
  templateUrl: './paymentFee.component.html',
  styleUrls: ['./paymentFee.component.scss']
})
export class PaymentFeeComponent implements OnInit {
  public form: FormGroup;
  public custId: AbstractControl;
  public feeCode: AbstractControl;
  public accountNumber: AbstractControl;


  constructor(public http: Http,
    private startupService: StartupService,
    private alertService: AlertService,
    private handle: Handle,
    fb: FormBuilder,
  ) {
    this.form = fb.group({
      'custId': ['', Validators.compose([Validators.required])],
      'feeCode': ['', Validators.compose([Validators.required, Validators.maxLength(3)])],
      'accountNumber': ['', Validators.compose([Validators.required, Validators.maxLength(16)])]
    });

    this.custId = this.form.controls['custId'];
    this.feeCode = this.form.controls['feeCode'];
    this.accountNumber = this.form.controls['accountNumber'];
  }

  ngOnInit() {
    this.startupService.checkToken();
  }

  public onPayment() {
    console.log(this.custId.value);
    console.log(this.feeCode.value);
    console.log(this.accountNumber.value);
  }
}
