import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'analysis', loadChildren: ()=>import('./analysis/analysis.module').then(m=>m.AnalysisModule)},
  { path: 'monitoring', loadChildren: ()=>import('./monitoring/monitoring.module').then(m=>m.MonitoringModule)},
  { path: 'vat-office', loadChildren: ()=>import('./vat-office/vat-office.module').then(m=>m.VatOfficeModule)},
  { path: 'mushaks', loadChildren: ()=> import('./mushak/mushak.module').then(m=>m.MushakModule)},
  { path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
