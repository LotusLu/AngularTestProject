import { Injectable, Injector, ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@Injectable()
export class Handle implements ErrorHandler {

  constructor(private injector: Injector) { }


  public handleError(error: Response | any) {
    const location = this.injector.get(LocationStrategy);
    const message = error.message ? error.message : error.toString();
    let errorJson = error.json();
    console.log(errorJson);
    if ('invalid_token' === errorJson.error)
      return Observable.throw("Token已失效，請重新登入！");
    else
      return Observable.throw(errorJson.message ? errorJson.message : error);
  }

}
