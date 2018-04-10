import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import { LoginData } from '../login/login-model/login-model';

@Injectable()
export class LoginService {
  public userLoginURL = '/meta/user-login-mock.json';
  public subject: Subject<LoginData> = new Subject<LoginData>();
  
  constructor(public http:Http){}

  public get currentUser():Observable<LoginData>{
      return this.subject.asObservable();
  }

  public login(user:LoginData){
    localStorage.setItem("loginUser",user.userId);
    return this.http
            .get(this.userLoginURL)
            .map((response: Response) => {
              let user = response.json();
              console.log(user);
              if(user && user.token){
                localStorage.setItem("currentUser",JSON.stringify(user));
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
    localStorage.removeItem("loginUser");
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }
}
