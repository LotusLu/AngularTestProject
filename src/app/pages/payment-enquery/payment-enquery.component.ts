import { Component, OnInit } from '@angular/core';
import { PaymentEnqueryData } from './payment-enquery-data/payment-enquery-data.module';
import { PaymentEnqueryService } from './payment-enquery.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { StartupService } from '../../share/service/startup.service';
import { AlertService } from '../../share/service/alert.service';
import { Const } from '../../share/constant/const';

@Component({
  selector: 'app-payment-enquery',
  templateUrl: './payment-enquery.component.html',
  styleUrls: ['./payment-enquery.component.scss']
})
export class PaymentEnqueryComponent implements OnInit {
  paymentEnqueryDatas: PaymentEnqueryData[] = [];

  public form: FormGroup;
  public userId: AbstractControl;

  constructor(fb: FormBuilder,
    public paymentEnqueryService: PaymentEnqueryService,
    private startupService: StartupService,
    private alertService: AlertService
  ) {
    this.form = fb.group({
      'userId': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
    this.userId = this.form.controls['userId'];
  }

  ngOnInit() {
    this.startupService.checkToken();
  }

  public onQuery(): void {
    this.paymentEnqueryService.queryPaymentList(this.userId.value, sessionStorage.getItem(Const.CHANNEL)).map(res => {
      console.log(res);
      let result = res.json();
      console.log(result);
      return result;
    }).subscribe(
      res => {
        console.log(res);
        this.paymentEnqueryDatas = res;
        // for (let entry of this.paymentEnqueryDatas) {
        //   console.log(entry);
        // }
        console.log(this.paymentEnqueryDatas);
        if (res['length'] === 0) {
          this.alertService.success("查無資料!");
        } else {
          this.alertService.success("查詢結束!");
        }
      },
      error => {
        this.alertService.error(error);
        console.log(error)
      },
      () => { }
    );
  }

}
