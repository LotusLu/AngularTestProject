import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing }       from './ui.routing';
import { Ui } from './ui.component';
import { Icons } from './components/icons/icons.component';

import { IconsService } from './components/icons/icons.service';
import { DefaultModal } from './components/modals/default-modal/default-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    SlimLoadingBarModule.forRoot(),
    routing
  ],
  declarations: [
    Icons,
    Ui,
    DefaultModal
  ],
  entryComponents: [
    DefaultModal
  ],
  providers: [
    IconsService
  ]
})
export class UiModule {
}
