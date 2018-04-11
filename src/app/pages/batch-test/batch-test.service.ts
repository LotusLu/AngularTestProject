import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BatchService {
    public testBatchURL = "http://rest-service.guides.spring.io/greeting";

    constructor(public http:Http) {
    }

    public doTestBatch(){
        console.log("user");
        
        return this.http.get(this.testBatchURL);
    }

}