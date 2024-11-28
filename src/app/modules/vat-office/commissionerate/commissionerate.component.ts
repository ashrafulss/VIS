import { Component } from '@angular/core';
import { Commissioner } from '../vat-office-model';

@Component({
  selector: 'app-commissionerate',
  templateUrl: './commissionerate.component.html',
  styleUrl: './commissionerate.component.css'
})
export class CommissionerateComponent {



  commissioners: Commissioner[] = [];

  constructor() { }

  ngOnInit(): void {
    // Mock API call or replace with actual service call
    this.commissioners = [
      {
        id: 1,
        name: 'Commissionerate #1',
        division: [
        {id: 2, name:"Division 1", details: "Dhaka"}  
        ]
      },
      {
        id: 2,
        name: 'Commissionerate #2',
        division: [
          { id: 3, name: 'Division #3', details: 'Details for Division #3' }, // Red circle
          { id: 4, name: 'Division #4', details: 'Details for Division #4' } // User icon
        ]
      }
    ];
  }

}
