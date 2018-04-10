import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public userId:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder,public router: Router,public activatedRoute: ActivatedRoute,) {
    this.form = fb.group({
      'userId': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.userId = this.form.controls['userId'];
    this.password = this.form.controls['password'];

  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid&&this.checkLogin()) {
      //將登入人員存入LocalStorage
      localStorage.setItem("loginUser",this.userId.value);
      //導至首頁
      this.router.navigateByUrl("page/workingSpace");
    }else{
      alert('Username or password is incorrect');
    }
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
