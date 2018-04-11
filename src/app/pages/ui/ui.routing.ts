import { Routes, RouterModule }  from '@angular/router';

import { Ui } from './ui.component';
import { Icons } from './components/icons/icons.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Ui,
    children: [
      { path: 'icons', component: Icons },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
