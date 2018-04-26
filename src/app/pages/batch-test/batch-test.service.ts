import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Handle } from '../../share/handle/Handle.service';
import { Const } from '../../share/constant/const';

@Injectable()
export class BatchService {

    constructor(public http: Http,
        public handle: Handle
    ) {
    }

    public doSaveSumfee() {
        let saveSumFeeURL = Const.BACK_END_URL + 'loadbal-service/loadPaymentFee/v1/saveSumfee' + Const.URL_PARAM_TOKEN + sessionStorage.getItem(Const.TOKEN);
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(Const.AUTH_ACCOUNT + ":" + Const.AUTH_PASSWORD));
        return this.http.get(saveSumFeeURL, { headers: headers })
            .catch(error => this.handle.handleError(error));
    }

    public doPaymentReport() {
        let paymentReportURL = Const.BACK_END_URL + 'loadbal-service/loadPaymentFee/v1/paymentReport' + Const.URL_PARAM_TOKEN + sessionStorage.getItem(Const.TOKEN);
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(Const.AUTH_ACCOUNT + ":" + Const.AUTH_PASSWORD));
        return this.http.get(paymentReportURL, { headers: headers })
            .catch(error => this.handle.handleError(error));
    }

    public doSendEmail() {
        let sendMailURL = Const.BACK_END_URL + 'loadbal-service/loadPaymentFee/v1/send' + Const.URL_PARAM_TOKEN + sessionStorage.getItem(Const.TOKEN);
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(Const.AUTH_ACCOUNT + ":" + Const.AUTH_PASSWORD));
        return this.http.get(sendMailURL, { headers: headers })
            .catch(error => this.handle.handleError(error));
    }

}