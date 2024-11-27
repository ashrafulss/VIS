import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VatOfficeRoutingModule } from './vat-office-routing.module';
import { VatOfficeComponent } from './vat-office/vat-office.component';


@NgModule({
  declarations: [
    VatOfficeComponent
  ],
  imports: [
    CommonModule,
    VatOfficeRoutingModule
  ]
})
export class VatOfficeModule { }
