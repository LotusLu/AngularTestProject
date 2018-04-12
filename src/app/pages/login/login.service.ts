import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import { LoginData } from '../login/login-model/login-model';
import { TOKEN, CHANNEL, LOGIN_USER } from '../../app.module';
import { Router } from '@angular/router';
import { Handle } from '../../handle/Handle.service';

@Injectable()
export class LoginService {
  public userLoginURL = 'https://reqres.in/api/login/';
  public subject: Subject<LoginData> = new Subject<LoginData>();
  
  constructor(public http:Http,
              public router:Router,
              public handle:Handle            
  ){}

  public get currentUser():Observable<LoginData>{
      return this.subject.asObservable();
  }

  public login(user:LoginData):Observable<Response>{
    sessionStorage.setItem(LOGIN_USER,user.userId);
    sessionStorage.setItem(CHANNEL,user.channel);
    return this.http
            .post(this.userLoginURL,{email:user.userId,password:user.password})
            .map((response: Response) => {
              let token = response.json();
              console.log(token);
              sessionStorage.setItem(TOKEN,JSON.stringify(token));
              return token;
            }).catch(error=>this.handle.handleError(error));
  }
  
  public logout():void{
    sessionStorage.removeItem(LOGIN_USER);
    sessionStorage.removeItem(TOKEN);
    this.subject.next(Object.assign({}));
  }

}
