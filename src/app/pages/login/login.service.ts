import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import { LoginData } from '../login/login-model/login-model';
import { Router } from '@angular/router';
import { Handle } from '../../share/handle/Handle.service';
import { Const } from '../../share/constant/const';

@Injectable()
export class LoginService {
  public userLoginURL = 'https://reqres.in/api/login/';
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
    return this.http
      .post(this.userLoginURL, { email: user.userId, password: user.password })
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
