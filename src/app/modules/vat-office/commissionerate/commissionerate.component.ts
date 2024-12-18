import { Component } from '@angular/core';
import { Commissioner } from '../vat-office-model';

@Component({
  selector: 'app-commissionerate',
  templateUrl: './commissionerate.component.html',
  styleUrl: './commissionerate.component.css'
})
export class CommissionerateComponent {



  getDotPosition(index: number, length: number): string {
    if (length === 1) {
      return '50%'; // Center dot if there's only one item
    } else {
      return `${(index / (length - 1)) * 100}%`; // Distribute dots evenly
    }
  }
  
  shouldShowLine(length: number): boolean {
    return length > 1; // Show line only if there’s more than one item
  }
  


  commissioners: Commissioner[] = [];

  constructor() { }

  ngOnInit(): void {

    this.commissioners = [
      {
        id: 1,
        name: 'Commissionerate #1',
        description: 'Large Taxpayer Unit - VAT',
        division:[
          {id: 1,
            name: "Division #1",
            circle:[
              {id:1,
                name: "Circle #1",
                taxpayer:[
                  {
                    id:1,
                    name:"taxpayer-1"
                  },
                  {
                    id:2,
                    name:"taxpayer-2"
                  }
                ]
              },
              {id:10,
                name: "Circle #10",
                taxpayer:[
                  {
                    id:12,
                    name:"taxpayer-1"
                  },
                  {
                    id:23,
                    name:"taxpayer-2"
                  }
                ]
              }
             
            ]
          },

          {id: 10,
            name: "Division #10",
            circle:[
              {id:10,
                name: "Circle #10",
                taxpayer:[
                  {
                    id:10,
                    name:"taxpayer-10"
                  },
                  {
                    id:20,
                    name:"taxpayer-20"
                  }
                ]
              }
             
            ]
          },

          {id: 11,
            name: "Division #11",
            circle:[
              {id:11,
                name: "Circle #11",
                taxpayer:[
                  {
                    id:11,
                    name:"taxpayer-10"
                  },
                  {
                    id:221,
                    name:"taxpayer-20"
                  }
                ]
              }
             
            ]
          },

          

        ]
      },






      {
        id: 2,
        name: 'Commissionerate #2',
        description: 'Customs, Excise and VAT Commissionerate, Dhaka (North)',
        division:[
          {id: 2,
            name: "Division #2",
            circle:[
              {id:2,
                name: "Circle #2",
                taxpayer:[
                  {
                    id:3,
                    name:"taxpayer-3"
                  },
                  {
                    id:4,
                    name:"taxpayer-4"
                  }
                ]
              }
             
            ]
          },
        ]
      },





      // {
      //   id: 3,
      //   name: 'Commissionerate #3',
      //   description: 'Customs, Excise and VAT Commissionerate, Dhaka (South)',
      //   division:[
      //     {id: 3,
      //       name: "Division #3",
      //       circle:[
      //         {id:3,
      //           name: "Circle #3",
      //           taxpayer:[
      //             {
      //               id:5,
      //               name:"taxpayer-5"
      //             },
      //             {
      //               id:6,
      //               name:"taxpayer-6"
      //             },
      //             {
      //               id:6,
      //               name:"taxpayer-7"
      //             }
      //           ]
      //         }
             
      //       ]
      //     },
      //   ]
      // },

  


    






      
    ];



  }


 
  



  expandedDivisionId: number | null = null; // Track the currently expanded division

  // Method to toggle the expanded state
  toggleCollapse(divisionId: number): void {
    if (this.expandedDivisionId === divisionId) {
      this.expandedDivisionId = null;  // Close if the clicked division is already expanded
    } else {
      this.expandedDivisionId = divisionId; // Expand the clicked division
    }
  }

  // Check if a division is expanded
  isExpanded(divisionId: number): boolean {
    return this.expandedDivisionId === divisionId;
  }

}
