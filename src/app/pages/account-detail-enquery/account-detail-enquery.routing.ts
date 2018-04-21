import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { AccountDetailEnqueryComponent } from './account-detail-enquery.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: AccountDetailEnqueryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
