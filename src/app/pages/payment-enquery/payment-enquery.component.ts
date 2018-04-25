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
  paymentEnqueryDatas: PaymentEnqueryData[];

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

  /**是否要列印 */
  printPaymentInfo(data: PaymentEnqueryData) {
    data.done = !data.done;
  }

  public onQuery(): void {
    this.paymentEnqueryDatas = null;
    this.alertService.close();
    this.paymentEnqueryService.queryPaymentList(this.userId.value, sessionStorage.getItem(Const.CHANNEL)).map(res => {
      let result = res.json();
      return result;
    }).subscribe(
      res => {
        var resultArray: Array<any> = []
        //單機測試
        //res["items"].forEach(data => {
        //正式
        res.forEach(data => {
          resultArray.push(
            {
              "id": data.id,
              "custId": data.custId,
              "paymentExpiry": data.paymentExpiry,
              "formatPaymentExpiry": data.paymentExpiry.substring(0, 4) + '/' + data.paymentExpiry.substring(4, 6) + '/' + data.paymentExpiry.substring(6, 8),
              "feeCode": data.feeCode,
              "accountNumber": data.accountNumber,
              "accountBalance": data.accountBalance,
              "paymentStatus": data.paymentStatus,
              "appId": data.appId,
              "bankCode": data.bankCode,
              "paymentDate": data.paymentDate,
            });
        });
        this.paymentEnqueryDatas = resultArray;
        if (res['length'] === 0) {
          this.alertService.error("查無資料!");
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
