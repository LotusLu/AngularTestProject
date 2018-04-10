import { Component, OnInit } from '@angular/core';
import { IconsService } from '../ui/components/icons/icons.service';

@Component({
  selector: 'app-working-space',
  templateUrl: './working-space.component.html',
  styleUrls: ['./working-space.component.scss']
})
export class WorkingSpaceComponent implements OnInit {

  icons:any;

  constructor(private _iconsService: IconsService) {
  }

  ngOnInit() {
    this.icons = this._iconsService.getAll();
  }
}
