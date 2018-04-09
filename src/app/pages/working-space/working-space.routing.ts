import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { WorkingSpaceComponent } from './working-space.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: WorkingSpaceComponent,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
