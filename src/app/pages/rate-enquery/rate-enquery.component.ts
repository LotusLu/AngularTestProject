import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, URLSearchParams } from '@angular/http';
import { Const } from '../../share/constant/const';
import { Handle } from '../../share/handle/Handle.service';
import { AlertService } from '../../share/service/alert.service';
import { StartupService } from '../../share/service/startup.service';

@Component({
  selector: 'app-rate-enquery',
  templateUrl: './rate-enquery.component.html',
  styleUrls: ['./rate-enquery.component.scss']
})
export class RateEnqueryComponent implements OnInit {
  canUseCcys: Array<any> = [];
  public form: FormGroup;
  public buyCcy: AbstractControl;
  public sellCcy: AbstractControl;
  public rateType: AbstractControl;
  public exchangeRate: number;

  constructor(fb: FormBuilder,
    private startupService: StartupService,
    private http: Http,
    private handle: Handle,
    private alertService: AlertService
  ) {
    this.form = fb.group({
      'buyCcy': ['', Validators.compose([Validators.required])],
      'sellCcy': ['', Validators.compose([Validators.required])],
      'rateType': ['', Validators.compose([Validators.required])]
    });

    this.buyCcy = this.form.controls['buyCcy'];
    this.sellCcy = this.form.controls['sellCcy'];
    this.rateType = this.form.controls['rateType'];

  }

  ngOnInit() {
    this.startupService.checkToken();
    this.rateType.patchValue("01");
    this.initCanUseCcys();
  }

  /**取得可用幣別 */
  public initCanUseCcys() {
    let canUseCcysURL = "/meta/canUseCcy-mock.json";
    return this.http.get(canUseCcysURL)
      .catch(error => this.handle.handleError(error))
      .map(res => {
        let result = res.json();
        return result;
      }).subscribe(
        res => {
          var resultArray: Array<any> = []
          //單機測試
          res["ccys"].forEach(data => {
            resultArray.push(
              {
                "ccyCode": data.ccyCode,
                "ccyChtName": data.ccyChtName,
              });
          });
          this.canUseCcys = resultArray;
        },
        error => {
          console.log(error);
        }
      );
  }

  public onRateEnquery() {
    let rateEnqueryURL = Const.BACK_END_URL + "loadbal-service/loadPaymentFee/v1/getRate" + Const.URL_PARAM_TOKEN + sessionStorage.getItem(Const.TOKEN);

    let params = new URLSearchParams();
    params.append('buyCcy', this.buyCcy.value);
    params.append('sellCcy', this.sellCcy.value);
    params.append('rateType', this.rateType.value);
    return this.http.get(rateEnqueryURL, { params: params })
      .catch(error => this.handle.handleError(error))
      .map(res => {
        let result = res.json();
        return result;
      }).subscribe(
        res => {
          console.log(res);
          this.exchangeRate = ((((((res['Body'])[0])['getBargainRateFromRateServerResponse'])[0])['return'])[0])['referenceRate'];
          this.alertService.success("查詢結束!");
        },
        error => {
          console.log(error);
          this.alertService.error(error);
        }
      );
  }

  public resetField() {
    this.alertService.close();
    this.exchangeRate = null;
  }

}
