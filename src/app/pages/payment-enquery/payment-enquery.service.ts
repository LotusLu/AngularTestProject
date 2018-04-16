import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Handle } from '../../share/handle/Handle.service';
import { Const } from '../../share/constant/const';


@Injectable()
export class PaymentEnqueryService {
    public paymentEnqueryURL = "http://192.168.8.102:2222/queryUserItem";

    constructor(public http: Http,
        public handle: Handle
    ) {
    }

    public queryPaymentList(searchUserId: string, channel: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append(Const.TOKEN, sessionStorage.getItem(Const.TOKEN));
        let params = new URLSearchParams();
        params.append('searchUserId', searchUserId);
        params.append('channel', channel);
        let options = new RequestOptions({ headers: headers, params: params });

        return this.http.get(this.paymentEnqueryURL, options)
            .catch(error => this.handle.handleError(error));
    }

}