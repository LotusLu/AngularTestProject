import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Handle } from '../../handle/Handle.service';

@Injectable()
export class BatchService {
    public testBatchURL = "https://reqres.in/api/unknown/23";

    constructor(public http:Http,
                public handle:Handle
    ) {
    }

    public doTestBatch(){
        console.log("user");
        
        return this.http.get(this.testBatchURL)
                        .catch(error=>this.handle.handleError(error));
    }

}