import { Component, OnInit } from '@angular/core';
import { PaymentEnqueryData } from './payment-enquery-data/payment-enquery-data.module';
import { PaymentEnqueryService } from './payment-enquery.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-enquery',
  templateUrl: './payment-enquery.component.html',
  styleUrls: ['./payment-enquery.component.scss']
})
export class PaymentEnqueryComponent implements OnInit {
  paymentEnqueryDatas: PaymentEnqueryData[] = [];
  
  public form:FormGroup;
  public userId:AbstractControl;

  constructor(fb:FormBuilder,
              public paymentEnqueryService: PaymentEnqueryService,
             ) {
    this.form = fb.group({
      'userId': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
    this.userId = this.form.controls['userId'];
  }

  ngOnInit() {
  }

  public onQuery():void{
    this.paymentEnqueryService.queryPaymentList(this.userId.value).map(res=>{
      let result=res.json();
      console.log(result);
      return result;
    }).subscribe(
			res=>{
				this.paymentEnqueryDatas = res["items"];
			},
			error => {console.log(error)},
			() => {}
		);
  }

}
