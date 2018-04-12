import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PaymentEnqueryService {
    public paymentEnqueryURL = "http://192.168.8.102:2222/queryUserItem";

    constructor(public http:Http) {
    }

    public queryPaymentList(searchUserId:string,channel:string){ 
        let params = new URLSearchParams();
        params.append('searchUserId',searchUserId);
        params.append('channel',channel);
        return this.http.get(this.paymentEnqueryURL,{search:params});
    }

}