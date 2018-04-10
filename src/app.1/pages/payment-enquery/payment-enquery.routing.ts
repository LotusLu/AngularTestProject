import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { PaymentEnqueryComponent } from './payment-enquery.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: PaymentEnqueryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
