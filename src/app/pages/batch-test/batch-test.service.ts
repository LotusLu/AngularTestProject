import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Handle } from '../../share/handle/Handle.service';
import { TOKEN } from '../../share/constant/const';

@Injectable()
export class BatchService {
    public testBatchURL = "https://reqres.in/api/unknown/23";

    constructor(public http: Http,
        public handle: Handle
    ) {
    }

    public doTestBatch() {
        let headers = new Headers();
        headers.append(TOKEN, sessionStorage.getItem(TOKEN));
        let params = new URLSearchParams();
        let options = new RequestOptions({ headers: headers, params: params });
        return this.http.get(this.testBatchURL, options)
            .catch(error => this.handle.handleError(error));
    }

}