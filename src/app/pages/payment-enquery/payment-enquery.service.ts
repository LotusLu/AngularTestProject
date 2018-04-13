import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Handle } from '../../handle/Handle.service';
import { TOKEN } from '../../service/const';

@Injectable()
export class PaymentEnqueryService {
    public paymentEnqueryURL = "http://192.168.8.102:2222/queryUserItem";

    constructor(public http:Http,
                public handle:Handle
    ) {
    }

    public queryPaymentList(searchUserId:string,channel:string){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append(TOKEN, sessionStorage.getItem(TOKEN));
        let params = new URLSearchParams();
        params.append('searchUserId', searchUserId);
        params.append('channel', channel);
        let options = new RequestOptions({ headers: headers, params: params });

        return this.http.get(this.paymentEnqueryURL,options)
                        .catch(error=>this.handle.handleError(error));
    }

}