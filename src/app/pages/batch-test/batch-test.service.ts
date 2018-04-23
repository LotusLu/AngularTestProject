import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Handle } from '../../share/handle/Handle.service';
import { Const } from '../../share/constant/const';

@Injectable()
export class BatchService {
    public saveSumFeeURL = Const.BACK_END_URL + 'saveSumfee' + Const.URL_PARAM_TOKEN + sessionStorage.getItem(Const.TOKEN);
    public paymentReportURL = Const.BACK_END_URL + 'paymentReport' + Const.URL_PARAM_TOKEN + sessionStorage.getItem(Const.TOKEN);
    public sendMailURL = 'http://192.168.8.102:3333/' + 'send' + Const.URL_PARAM_TOKEN + sessionStorage.getItem(Const.TOKEN);

    constructor(public http: Http,
        public handle: Handle
    ) {
    }

    public doSaveSumfe() {
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(Const.AUTH_ACCOUNT + ":" + Const.AUTH_PASSWORD));
        return this.http.get(this.saveSumFeeURL, { headers: headers })
            .catch(error => this.handle.handleError(error));
    }

    public doPaymentReport() {
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(Const.AUTH_ACCOUNT + ":" + Const.AUTH_PASSWORD));
        return this.http.get(this.paymentReportURL, { headers: headers })
            .catch(error => this.handle.handleError(error));
    }

    public doSendEmail() {
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(Const.AUTH_ACCOUNT + ":" + Const.AUTH_PASSWORD));
        return this.http.get(this.sendMailURL, { headers: headers })
            .catch(error => this.handle.handleError(error));
    }

}