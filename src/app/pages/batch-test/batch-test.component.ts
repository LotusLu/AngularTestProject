import { Component, OnInit } from '@angular/core';
import { BatchService } from './batch-test.service';
import { StartupService } from '../../service/startup.service';

@Component({
  selector: 'app-batch-test',
  templateUrl: './batch-test.component.html',
  styleUrls: ['./batch-test.component.scss']
})
export class BatchTestComponent implements OnInit {
  responseMsg:any;

  constructor(public batchService: BatchService,
              private startupService: StartupService
  ) { }

  ngOnInit() {
    this.startupService.checkToken();
  }

  public onTestBatch():void{
    this.batchService.doTestBatch().subscribe(
      data => {
        console.log(data);
        this.responseMsg=data["_body"];
      },
      error => {
        console.error(error);
        this.responseMsg=error;
      }
    );
    console.log("onTestBatch")
  }
}
