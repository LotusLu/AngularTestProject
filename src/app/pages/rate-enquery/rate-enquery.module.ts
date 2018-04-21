import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { AlertModule } from '../../share/directives/alert.module';
import { routing } from './rate-enquery.routing';
import { RateEnqueryComponent } from './rate-enquery.component';

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
    RateEnqueryComponent
  ]
})
export class PaymentModule { }
