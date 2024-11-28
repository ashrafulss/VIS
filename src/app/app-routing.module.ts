import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'analysis', loadChildren: ()=>import('./modules/analysis/analysis.module').then(m=>m.AnalysisModule)},
  { path: 'monitoring', loadChildren: ()=>import('./modules/monitoring/monitoring.module').then(m=>m.MonitoringModule)},
  { path: 'vat-office', loadChildren: ()=>import('./modules/vat-office/vat-office.module').then(m=>m.VatOfficeModule)},
  { path: 'mushaks', loadChildren: ()=> import('./modules/mushak/mushak.module').then(m=>m.MushakModule)},
  { path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
