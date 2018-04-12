import { Component, OnInit } from '@angular/core';
import { BatchService } from './batch-test.service';
import { StartupService } from '../../service/startup.service';
import { AlertService } from '../../service/alert.service';

@Component({
  selector: 'app-batch-test',
  templateUrl: './batch-test.component.html',
  styleUrls: ['./batch-test.component.scss']
})
export class BatchTestComponent implements OnInit {

  constructor(public batchService: BatchService,
              private startupService: StartupService,
              private alertService:AlertService
  ) { }

  ngOnInit() {
    this.startupService.checkToken();
  }

  public onTestBatch():void{
    this.batchService.doTestBatch().subscribe(
      data => {
        console.log(data);
        this.alertService.success(data["_body"]);
      },
      error => {
        console.error(error);
        this.alertService.success(error.error);
      }
    );
  }
}
