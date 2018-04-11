import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { LoginData } from './login-model/login-model';
import { TOKEN } from '../../app.module';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  public loginData:LoginData = new LoginData();
  public form:FormGroup;
  public userId:AbstractControl;
  public password:AbstractControl;
  public channel:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder,
              public router: Router,
              public activatedRoute: ActivatedRoute,
              public loginService: LoginService,
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
    this.channel.patchValue("01");
  }

  public onLogin(values:Object):void {
    this.submitted = true;
    if (this.form.valid&&this.checkLogin()) {
      this.filledLoginData();
      console.log(this.loginData);
      this.loginService.login(this.loginData);
      //導至首頁
      this.router.navigateByUrl("page/workingSpace");
    }else{
      alert('Username or password is incorrect');
    }
  }

  private filledLoginData():void{
    this.loginData.userId=this.userId.value;
    this.loginData.password=this.password.value;
    this.loginData.channel=this.channel.value;
  }

  /**
  * 檢查可否登入
  */
  private checkLogin():boolean{
    console.log("checkLogin!!");
    if('admin'===this.userId.value && 'admin'===this.password.value){
      return true;
    }   
    return false;
  }


}
