import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import { Handle } from '../../share/handle/Handle.service';
import { Const } from '../../share/constant/const';
import { LoginData } from '../../pages/login/login-model/login-model';

@Injectable()
export class LoginService {
  //public userLoginURL = 'https://reqres.in/api/login/';

  public userLoginURL = 'http://192.168.8.106:18081/oauth/token';
  public subject: Subject<LoginData> = new Subject<LoginData>();

  constructor(public http: Http,
    public router: Router,
    public handle: Handle
  ) { }

  public get currentUser(): Observable<LoginData> {
    return this.subject.asObservable();
  }

  public login(user: LoginData): Observable<Response> {
    sessionStorage.setItem(Const.LOGIN_USER, user.userId);
    sessionStorage.setItem(Const.CHANNEL, user.channel);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    console.log('Basic ' + btoa('ts-client' + ":" + 'ts-secret'));
    headers.append('Authorization', 'Basic ' + btoa('ts-client' + ":" + 'ts-secret'));

    let optionsArgs: RequestOptionsArgs = { headers: headers, withCredentials: true }
    let options = new RequestOptions(optionsArgs)


    const formData = new FormData();
    formData.append("username", "Alex123");
    formData.append("password", "password");
    formData.append("grant_type", "password");
    return this.http
      //.post(this.userLoginURL, { email: user.userId, password: user.password })
      .post(this.userLoginURL, formData, options)
      .map((response: Response) => {
        let token = response.json();
        console.log(token);
        sessionStorage.setItem(Const.TOKEN, JSON.stringify(token));
        return token;
      }).catch(error => this.handle.handleError(error));
  }

  public logout(): void {
    sessionStorage.clear;
  }

}
