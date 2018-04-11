import { Component, OnInit } from '@angular/core';
import { PaymentEnqueryData } from './payment-enquery-data/payment-enquery-data.module';
import { PaymentEnqueryService } from './payment-enquery.service';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { StartupService } from '../../service/startup.service';
import { CHANNEL } from '../../app.module';

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
              private startupService: StartupService
             ) {
    this.form = fb.group({
      'userId': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
    this.userId = this.form.controls['userId'];
  }

  ngOnInit() {
    this.startupService.checkToken();
  }

  public onQuery():void{
    this.paymentEnqueryService.queryPaymentList(this.userId.value,localStorage.getItem(CHANNEL)).map(res=>{
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
