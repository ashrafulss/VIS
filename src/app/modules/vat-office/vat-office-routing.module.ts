import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VatOfficeComponent } from './vat-office/vat-office.component';
import path from 'path';
import { DivisionComponent } from './division/division.component';
import { CommissionerateComponent } from './commissionerate/commissionerate.component';
import { TaxPayerComponent } from './tax-payer/tax-payer.component';
import { CircleComponent } from './circle/circle.component';

const routes: Routes = [
  {path: '', component: VatOfficeComponent,
    children:[
      {path: 'commissionerate', component: CommissionerateComponent},
      {path: 'division', component: DivisionComponent},
      {path: 'circle', component: CircleComponent},
      {path: 'tax-payer', component: TaxPayerComponent},
      {path: '**', component:CommissionerateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VatOfficeRoutingModule { }
