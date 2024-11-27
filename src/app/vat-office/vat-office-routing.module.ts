import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VatOfficeComponent } from './vat-office/vat-office.component';

const routes: Routes = [
  {path: '', component: VatOfficeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VatOfficeRoutingModule { }
