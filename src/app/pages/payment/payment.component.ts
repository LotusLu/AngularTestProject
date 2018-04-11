import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { StartupService } from '../../service/startup.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  selectFileName:string;
  selectedFile:File;


  constructor(public http:Http,
              private startupService: StartupService
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
    this.http.post("http://172.20.10.2:6271/",formData).subscribe(res=>{
      console.log(res);
    });
    
  }
}
