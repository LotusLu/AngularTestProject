import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Handle } from '../../share/handle/Handle.service';
import { Const } from '../../share/constant/const';


@Injectable()
export class PaymentEnqueryService {
    public paymentEnqueryURL = "/meta/payment-enquery-mock.json";
    //public paymentEnqueryURL = Const.BACK_END_URL + "queryUserItem" + Const.URL_PARAM_TOKEN + sessionStorage.getItem(Const.TOKEN);

    constructor(public http: Http,
        public handle: Handle
    ) {
    }

    public queryPaymentList(searchUserId: string, channel: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + btoa(Const.AUTH_ACCOUNT + ":" + Const.AUTH_PASSWORD));
        let params = new URLSearchParams();
        params.append('searchUserId', searchUserId);
        params.append('channel', channel);
        let options = new RequestOptions({ headers: headers, params: params });

        return this.http.get(this.paymentEnqueryURL, options)
            .catch(error => this.handle.handleError(error));
    }

}