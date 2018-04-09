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
      dueDate:'20180409',
      chargeNumber:'014',
      settleNumber:'1234567890123456',
      amount:100,
      state:''
     },{
       dueDate:'20180410',
       chargeNumber:'068',
       settleNumber:'0123456123456789',
       amount:200,
       state:''
      }];
  }

}
