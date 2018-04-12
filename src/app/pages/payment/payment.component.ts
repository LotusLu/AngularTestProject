import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { StartupService } from '../../service/startup.service';
import { AlertService } from '../../service/alert.service';
import { Handle } from '../../handle/Handle.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  selectFileName:string;
  selectedFile:File;


  constructor(public http:Http,
              private startupService: StartupService,
              private alertService: AlertService,
              private handle:Handle
  ) { }

  ngOnInit() {
    this.startupService.checkToken();
    this.selectFileName='請選擇檔案!';
  }

  public onFileSelect(event){
    //KEEP上傳之檔案
    this.selectedFile=<File>event.target.files[0];
    this.selectFileName=this.selectedFile.name;
    console.log(this.selectedFile);
  }

  public onUpload(){
    const formData=new FormData();
    formData.append(this.selectedFile.type,this.selectedFile,this.selectedFile.name);
    this.http.post("http://172.20.10.2:6271/",formData)
    .catch(error=>this.handle.handleError(error))
    .subscribe( 
      data => {
          console.log(data);
          this.alertService.success("Upload Finish!");
      },
      error => {
        this.alertService.error(error);
      }
    );
    
  }
}
