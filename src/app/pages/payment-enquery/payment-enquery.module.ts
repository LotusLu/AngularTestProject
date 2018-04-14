import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { PaymentEnqueryComponent } from './payment-enquery.component';
import { routing } from './payment-enquery.routing';
import { NgxBarcodeModule } from 'ngx-barcode';
import { PaymentEnqueryService } from './payment-enquery.service';
import { AlertModule } from '../../share/directives/alert.module';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    NgxBarcodeModule,
    AlertModule,
    routing
  ],
  declarations: [
    PaymentEnqueryComponent
  ],
  providers: [
    PaymentEnqueryService
  ]
})
export class PaymentEnqueryModule { }
