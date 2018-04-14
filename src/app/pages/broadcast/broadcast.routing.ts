import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { BroadcastComponent } from './broadcast.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: BroadcastComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
