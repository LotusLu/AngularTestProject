import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { RateEnqueryComponent } from './rate-enquery.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: RateEnqueryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
