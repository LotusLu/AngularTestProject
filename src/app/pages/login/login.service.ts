import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import { LoginData } from '../login/login-model/login-model';
import { TOKEN, CHANNEL, LOGIN_USER } from '../../app.module';

@Injectable()
export class LoginService {
  public userLoginURL = '/meta/user-login-mock.json';
  public subject: Subject<LoginData> = new Subject<LoginData>();
  
  constructor(public http:Http){}

  public get currentUser():Observable<LoginData>{
      return this.subject.asObservable();
  }

  public login(user:LoginData){
    sessionStorage.setItem(LOGIN_USER,user.userId);
    console.log(user.channel);
    sessionStorage.setItem(CHANNEL,user.channel);
    return this.http
            .get(this.userLoginURL)
            .map((response: Response) => {
              let user = response.json();
              if(user && user.token){
                sessionStorage.setItem(TOKEN,JSON.stringify(user));
                this.subject.next(Object.assign({},user));
              }
              return response;
            })
            .subscribe(
                data => {
                    console.log("login success>"+data);
                },
                error => {
                    console.error(error);
                }
            );
  }

  public logout():void{
    sessionStorage.removeItem(LOGIN_USER);
    sessionStorage.removeItem(TOKEN);
    this.subject.next(Object.assign({}));
  }
}
