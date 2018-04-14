import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketService } from './shared/services/socket.service';
import { BroadcastComponent } from './broadcast.component';
import { NgaModule } from '../../theme/nga.module';
import { AlertModule } from '../../share/directives/alert.module';
import { routing } from './broadcast.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    AlertModule,
    routing
  ],
  declarations: [BroadcastComponent],
  providers: [SocketService]
})
export class BroadcastModule { }
