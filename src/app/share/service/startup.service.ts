import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class StartupService {

  constructor( 
    public router: Router,
  ) { }

  public checkToken():void{
    if(!sessionStorage.getItem("access_token")){
      console.log("no token please login demoSite");
      //導至首頁
      this.router.navigateByUrl("login");
    }
  }

}
