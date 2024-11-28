import { Component, Input } from '@angular/core';
import { Division } from '../vat-office-model';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrl: './division.component.css'
})
export class DivisionComponent {



  @Input() divisions: Division[] = [];




}
