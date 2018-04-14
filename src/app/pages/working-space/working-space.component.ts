import { Component, OnInit } from '@angular/core';
import { IconsService } from '../ui/components/icons/icons.service';
import { StartupService } from '../../share/service/startup.service';

@Component({
  selector: 'app-working-space',
  templateUrl: './working-space.component.html',
  styleUrls: ['./working-space.component.scss']
})
export class WorkingSpaceComponent implements OnInit {

  functions: any;

  constructor(private _iconsService: IconsService,
    private startupService: StartupService
  ) {
  }

  ngOnInit() {
    this.startupService.checkToken();
    this.functions = this._iconsService.getFunctionList();
  }
}
