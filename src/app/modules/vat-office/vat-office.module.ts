import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VatOfficeRoutingModule } from './vat-office-routing.module';
import { VatOfficeComponent } from './vat-office/vat-office.component';
import { CommissionerateComponent } from './commissionerate/commissionerate.component';
import { DivisionComponent } from './division/division.component';
import { CircleComponent } from './circle/circle.component';
import { TaxPayerComponent } from './tax-payer/tax-payer.component';


@NgModule({
  declarations: [
    VatOfficeComponent,
    CommissionerateComponent,
    DivisionComponent,
    CircleComponent,
    TaxPayerComponent
  ],
  imports: [
    CommonModule,
    VatOfficeRoutingModule
  ]
})
export class VatOfficeModule { }
