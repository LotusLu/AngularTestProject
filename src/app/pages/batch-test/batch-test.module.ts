import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { BatchTestComponent } from './batch-test.component';
import { routing } from '../batch-test/batch-test.routing';
import { BatchService } from './batch-test.service';
import { AlertModule } from '../../_directives/alert.module';

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
  declarations: [
    BatchTestComponent
  ],
  providers: [
    BatchService
  ]
})
export class BatchModule {}
