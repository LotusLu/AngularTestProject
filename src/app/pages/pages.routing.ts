import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'workingSpace', pathMatch: 'full' },
      { path: 'workingSpace', loadChildren: './working-space/working-space.module#WorkingSpaceModule' },
      { path: 'paymentEnquery', loadChildren: './payment-enquery/payment-enquery.module#PaymentEnqueryModule' },
      { path: 'payment', loadChildren: './payment/payment.module#PaymentModule' },
      { path: 'broadcast', loadChildren: './broadcast/broadcast.module#BroadcastModule' },
      { path: 'batch', loadChildren: './batch-test/batch-test.module#BatchModule' }
    ]

  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
