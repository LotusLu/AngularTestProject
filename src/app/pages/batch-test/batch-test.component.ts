import { Component, OnInit } from '@angular/core';
import { BatchService } from './batch-test.service';
import { StartupService } from '../../share/service/startup.service';
import { AlertService } from '../../share/service/alert.service';


@Component({
  selector: 'app-batch-test',
  templateUrl: './batch-test.component.html',
  styleUrls: ['./batch-test.component.scss']
})
export class BatchTestComponent implements OnInit {

  constructor(public batchService: BatchService,
    private startupService: StartupService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.startupService.checkToken();
  }
  public onSaveSumfee(): void {
    this.batchService.doSaveSumfe().subscribe(
      data => {
        console.log(data);
        this.alertService.success(data["_body"]);
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

  public onPaymentReport(): void {
    this.batchService.doPaymentReport().subscribe(
      data => {
        console.log(data);
        this.alertService.success(data["_body"]);
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

  public onSendEmail(): void {
    this.batchService.doSendEmail().subscribe(
      data => {
        console.log(data);
        this.alertService.success(data["_body"]);
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

}
