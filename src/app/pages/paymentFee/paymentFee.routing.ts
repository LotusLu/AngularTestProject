import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { PaymentFeeComponent } from './paymentFee.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: PaymentFeeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
