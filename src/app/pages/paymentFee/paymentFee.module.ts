import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { PaymentFeeComponent } from './paymentFee.component';
import { routing } from './paymentFee.routing';
import { AlertModule } from '../../share/directives/alert.module';

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
    PaymentFeeComponent
  ]
})
export class PaymentFeeModule { }
