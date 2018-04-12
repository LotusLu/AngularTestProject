import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import { LoginData } from '../login/login-model/login-model';
import { TOKEN, CHANNEL, LOGIN_USER } from '../../app.module';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  public userLoginURL = '/meta/user-login-mock.json';
  public subject: Subject<LoginData> = new Subject<LoginData>();
  
  constructor(public http:Http,
              public router:Router            
  ){}

  public get currentUser():Observable<LoginData>{
      return this.subject.asObservable();
  }

  public login(user:LoginData):Observable<Response>{
    sessionStorage.setItem(LOGIN_USER,user.userId);
    sessionStorage.setItem(CHANNEL,user.channel);
    return this.http
            .get(this.userLoginURL)
            .map((response: Response) => {
              if(!this.checkLogin(user)){
                throw Observable.throw("Username or password is incorrect");
              }
              let jsonUser = response.json();
              if(jsonUser && jsonUser.token){
                sessionStorage.setItem(TOKEN,JSON.stringify(jsonUser));
                this.subject.next(Object.assign({},jsonUser));
              }
              return response;
            });
  }

  public logout():void{
    sessionStorage.removeItem(LOGIN_USER);
    sessionStorage.removeItem(TOKEN);
    this.subject.next(Object.assign({}));
  }

  /**
  * 檢查可否登入
  */
 private checkLogin(user:LoginData):boolean{
  if('admin'===user.userId && 'admin'===user.password){
    return true;
  }   
  return false;
}
}
