import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PaymentEnqueryService {
    public paymentEnqueryURL = "/meta/payment-enquery-mock.json";

    constructor(public http:Http) {
    }

    public queryPaymentList(searchUserId:string){   
        let params = new URLSearchParams();
        params.set('userId',searchUserId);
        return this.http.get(this.paymentEnqueryURL,{search:params});
    }

}