import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit,  PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Fixed typo here
})
export class DashboardComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const dateInput = document.getElementById('fromDate') as HTMLInputElement;

      if (dateInput) {
        // Trigger the calendar when clicking the input
        dateInput.addEventListener('click', () => {
          dateInput.focus(); // Ensure the calendar opens
        });

        // Optional: Make sure the entire area behaves as expected
        dateInput.addEventListener('focus', () => {
          dateInput.click(); // Programmatically open the calendar
        });
      }
    }
  }














  
  


}
