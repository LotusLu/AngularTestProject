import { Component, OnInit } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { StartupService } from '../../share/service/startup.service';
import { AlertService } from '../../share/service/alert.service';
import { Handle } from '../../share/handle/Handle.service';
import { Const } from '../../share/constant/const';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public paymentUploadURL = Const.BACK_END_URL + "sendFile" + Const.URL_PARAM_TOKEN + sessionStorage.getItem(Const.TOKEN);;
  selectFileName: string;
  selectedFile: File;


  constructor(public http: Http,
    private startupService: StartupService,
    private alertService: AlertService,
    private handle: Handle
  ) { }

  ngOnInit() {
    this.startupService.checkToken();
    this.selectFileName = '請選擇檔案!';
  }

  public onFileSelect(event) {
    //KEEP上傳之檔案
    this.selectedFile = <File>event.target.files[0];
    this.selectFileName = this.selectedFile.name;
    console.log(this.selectedFile);
  }

  public onUpload() {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(Const.AUTH_ACCOUNT + ":" + Const.AUTH_PASSWORD));
    let options = new RequestOptions({ headers: headers });
    const formData = new FormData();
    formData.append("file", this.selectedFile, this.selectedFile.name);
    formData.append("appId", sessionStorage.getItem(Const.CHANNEL));
    this.http.post(this.paymentUploadURL, formData, options)
      .catch(error => this.handle.handleError(error))
      .subscribe(
        data => {
          console.log(data);
          this.alertService.success("Upload Finish!");
        },
        error => {
          console.log(error);
          this.alertService.error('上傳格式有誤，請確認!!!');
        }
      );

  }
}
