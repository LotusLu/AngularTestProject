import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { PaymentComponent } from './payment.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: PaymentComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
