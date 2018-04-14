import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class Handle {

    public handleError (error: Response | any) {
    console.error(error);
    return Observable.throw(error);
  }

}
