import { Component, OnInit } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { StartupService } from '../../share/service/startup.service';
import { AlertService } from '../../share/service/alert.service';
import { Handle } from '../../share/handle/Handle.service';
import { Const } from '../../share/constant/const';
import { PaymentEnqueryData } from '../payment-enquery/payment-enquery-data/payment-enquery-data.module';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentEnqueryDatas: PaymentEnqueryData[];
  selectFileName: string;
  selectedFile: File;


  constructor(public http: Http,
    private startupService: StartupService,
    private alertService: AlertService,
    private handle: Handle
  ) { }

  ngOnInit() {
    this.startupService.checkToken();
    this.selectFileName = '請選擇欲上傳之檔案!';
  }

  public onFileSelect(event) {
    this.alertService.close();
    this.paymentEnqueryDatas = null;
    //KEEP上傳之檔案
    this.selectedFile = <File>event.target.files[0];
    this.selectFileName = this.selectedFile.name;
    console.log(this.selectedFile);
  }

  public onUpload() {
    if (this.selectedFile) {
      let paymentUploadURL = Const.BACK_END_URL + "/loadbal-service/loadPaymentFee/v1/sendFile" + Const.URL_PARAM_TOKEN + sessionStorage.getItem(Const.TOKEN);;
      let headers = new Headers();
      headers.append('Authorization', 'Basic ' + btoa(Const.AUTH_ACCOUNT + ":" + Const.AUTH_PASSWORD));
      let options = new RequestOptions({ headers: headers });
      const formData = new FormData();
      formData.append("file", this.selectedFile, this.selectedFile.name);
      formData.append("appId", sessionStorage.getItem(Const.CHANNEL));
      this.http.post(paymentUploadURL, formData, options)
        .catch(error => this.handle.handleError(error))
        .map(res => {
          console.log(res);
          let result = res.json();
          console.log(result);
          return result;
        })
        .subscribe(
          data => {
            console.log(data);
            var resultArray: Array<any> = []
            //單機測試
            //res["items"].forEach(data => {
            //正式
            data.forEach(data => {
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
            this.alertService.success("上傳完成，清單如下!");
          },
          error => {
            console.log(error);
            this.alertService.error('上傳格式有誤，請確認!!!');
          }
        );
    } else {
      this.alertService.error('請先選擇欲上傳之檔案!');
    }
  }
}
