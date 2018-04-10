import { Component, OnInit } from '@angular/core';
import { PaymentEnqueryData } from './payment-enquery-data/payment-enquery-data.module';

@Component({
  selector: 'app-payment-enquery',
  templateUrl: './payment-enquery.component.html',
  styleUrls: ['./payment-enquery.component.scss']
})
export class PaymentEnqueryComponent implements OnInit {
  paymentEnqueryDatas: PaymentEnqueryData[] = [];
 

  constructor() { }

  ngOnInit() {
    this.loadAllData();
  }

  private loadAllData() {
    this.paymentEnqueryDatas= [{
      userId:'Lotus',
      feeName:'信用卡費',
      dueDate:'20180409',
      chargeNumber:'014',
      settleNumber:'1234567890123456',
      ccy:'TWD',
      amount:100,
      state:''
     },{
       userId:'Lotus',
       feeName:'電話費',
       dueDate:'20180410',
       chargeNumber:'068',
       settleNumber:'0123456123456789',
       ccy:'TWD',
       amount:200,
       state:''
      }];
  }

}
