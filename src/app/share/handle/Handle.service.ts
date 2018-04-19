import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class Handle {

  public handleError(error: Response | any) {
    let errorJson = error.json();
    console.log(errorJson);
    return Observable.throw(errorJson.message?errorJson.message:error);
  }

}
