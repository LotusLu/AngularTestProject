import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';
import { AppModule } from '../app.module';
import { SocketService } from './broadcast/shared/services/socket.service';
import { DefaultModal } from './ui/components/modals/default-modal/default-modal.component';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  
  declarations: [Pages,DefaultModal],
  entryComponents: [
    DefaultModal
  ],
  providers: [SocketService]
})
export class PagesModule {
}
