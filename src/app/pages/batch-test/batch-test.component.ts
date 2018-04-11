import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-test',
  templateUrl: './batch-test.component.html',
  styleUrls: ['./batch-test.component.scss']
})
export class BatchTestComponent implements OnInit {
  responseMsg:string;

  constructor() { }

  ngOnInit() {
  }

  public onTestBatch():void{
    console.log("onTestBatch");
    this.responseMsg="TEST BATCH";
  }
}
