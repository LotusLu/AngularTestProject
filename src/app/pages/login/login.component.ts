import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { LoginData } from './login-model/login-model';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AlertService } from '../../share/service/alert.service';
import { Const } from '../../share/constant/const';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  public loginData: LoginData = new LoginData();
  public form: FormGroup;
  public userId: AbstractControl;
  public password: AbstractControl;
  public channel: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public loginService: LoginService,
    public alertService: AlertService,
    public http: Http
  ) {
    this.form = fb.group({
      'userId': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'channel': ['', Validators.compose([Validators.required])]
    });

    this.userId = this.form.controls['userId'];
    this.password = this.form.controls['password'];
    this.channel = this.form.controls['channel'];
    console.log(loginService);
  }

  ngOnInit() {
    //初始化則執行登出動作
    this.loginService.logout();
    //通路預設7-11
    this.channel.patchValue("711");
  }
  public userLoginURL = 'meta/user-login-mock.json';

  public onLogin(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this.filledLoginData();
      console.log(this.loginData);
      this.loginService.login(this.loginData).subscribe(
        data => {
          console.log("login success>" + data);
          this.getCurrenctUserInStorage().subscribe(
            data => {
              //導至首頁
              this.router.navigateByUrl("page/workingSpace");
            },
            error => {
              this.alertService.error(error);
            }
          );
        },
        error => {
          this.alertService.error(error);
        }
      );
    }
  }

  private filledLoginData(): void {
    this.loginData.userId = this.userId.value;
    this.loginData.password = this.password.value;
    this.loginData.channel = this.channel.value;
  }

  /**
   * 取得角色權限代碼
   */
  private getCurrenctUserInStorage(): Observable<Response> {
    return this.http
      .get(this.userLoginURL)
      .map((response: Response) => {
        let userJson = response.json();
        let users = userJson['userItems'] || [];
        let filterUser = users.filter(user => user.userId === this.loginData.userId);
        if (filterUser.length) {
          sessionStorage.setItem(Const.USER_TYPE, filterUser[0].userType);
        } else {
          sessionStorage.setItem(Const.USER_TYPE, "user");
        }
        return filterUser;
      });
  }

}
