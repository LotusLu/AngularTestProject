import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { BatchTestComponent } from './batch-test.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: BatchTestComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
