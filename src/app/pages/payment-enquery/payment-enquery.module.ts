import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { PaymentEnqueryComponent } from './payment-enquery.component';
import { routing } from './payment-enquery.routing';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    NgxBarcodeModule,
    routing
  ],
  declarations: [
    PaymentEnqueryComponent
  ]
})
export class PaymentEnqueryModule {}
