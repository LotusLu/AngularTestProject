import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Handle } from '../../handle/Handle.service';

@Injectable()
export class PaymentEnqueryService {
    public paymentEnqueryURL = "http://192.168.8.102:2222/queryUserItem";

    constructor(public http:Http,
                public handle:Handle
    ) {
    }

    public queryPaymentList(searchUserId:string,channel:string){ 
        let params = new URLSearchParams();
        params.append('searchUserId',searchUserId);
        params.append('channel',channel);
        return this.http.get(this.paymentEnqueryURL,{search:params})
                        .catch(error=>this.handle.handleError(error));
    }

}