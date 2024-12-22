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
              {id:2,
                name:"circle",
                taxpayer:[
                    {
                      id:30,
                      name:"taxpayer"
                    },

                    {
                      id:12,
                      name:"taxpayer"
                    },
                ]
              },


              {id:50,
                name:"circle",
                taxpayer:[

                ]
              },
                     
            ]
          },


          {id: 2,
            name: "Division #1",
            circle:[
           
                     
            ]
          },


          {id: 4,
            name: "Division #1",
            circle:[
           
                     
            ]
          },

          {id: 5,
            name: "Division #1",
            circle:[
           
                     
            ]
          },


          

        ]
      },



      {
        id: 2,
        name: 'Commissionerate #1',
        description: 'Large Taxpayer Unit - VAT',
        division:[
          {id: 1,
            name: "Division #1",
            circle:[
           
                     
            ]
          },


          {id: 2,
            name: "Division #1",
            circle:[
           
                     
            ]
          },


          {id: 4,
            name: "Division #1",
            circle:[
           
                     
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












  timelineData = [
    {
      content: 'Twitter thanks for your appreciation and Google thanks for your appreciation',
      date: '13 June 18'
    },
    {
      content: 'Started a new project and completed the first phase successfully.',
      date: '25 July 19'
    },
    {
      content: 'Attended a workshop on Angular development and learned a lot.',
      date: '03 September 20'
    },
    {
      content: 'Attended a workshop on Angular development and learned a lot.',
      date: '03 September 20'
    }
  ];

}
