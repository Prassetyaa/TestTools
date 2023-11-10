import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iso20022-json-message-settings',
  templateUrl: './iso20022-json-message-settings.component.html',
  styleUrls: ['./iso20022-json-message-settings.component.css'],
})
export class Iso20022JsonMessageSettingsComponent implements OnInit {
  endpointItems: any[] = [];
  searchTerm: string = '';
  transParamItems: any[] = []; // Replace 'any[]' with the actual type of your transaction parameter data
  selectedEndpointItem: any; // Replace 'any' with the actual type of your endpoint item
  selectedTransParamItem: any; // Replace 'any' with the actual type of your transaction parameter item
  dummyAlertType: any[] = [];

  visibleTransParamDialog = false;
  isLoading = false;
  dialogMode!: string;

  itemsPerPage = 5; // Number of items to display per page
  currentPage = 1;
  totalPages!: number;
  displayedEndpoints!: any[];

  constructor(private http: HttpClient) {}

  // Lifecycle hook: Initialize pagination when component is created
  ngOnInit() {
    // this.initializePagination();
    this.http.get<any[]>('assets/navbar.json').subscribe(data => {
      this.endpointItems = data;
      console.log(data)
    });

    this.http.get<any>('assets/endpoint.json').subscribe((response) => {
      this.dummyAlertType = response;
    })
  }

  checkExpandButtonStatus(data: any[]) {
    return data.length == 0;
  }

  checkExpandButtonStyle(data: any[]) {
    if (data.length == 0) {
      return {
        opacity: '0',
        cursor: 'none',
      };
    }
    return {
      opacity: '1',
      cursor: 'pointer',
    };
  }

  calculatePadding(lvl: number): string {
    if (lvl == 0) {
      return `${2}`;
    }
    const basePadding = 2; // 2rem as the base padding
    const paddingIncrement = .8 // 2rem as the increment for each level
    const totalPadding = basePadding + lvl * paddingIncrement;
    return `${totalPadding}`;
  }

  //  // Method to initialize pagination
  //  initializePagination() {
  //   this.totalPages = Math.ceil(this.endpointItems.length / this.itemsPerPage);
  //   this.updateDisplayedEndpoints();
  // }

  // // Method to update displayed endpoints based on current page
  // updateDisplayedEndpoints() {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   this.displayedEndpoints = this.endpointItems.slice(startIndex, endIndex);
  // }

  //  // Method to go to the previous page
  //  prevPage() {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.updateDisplayedEndpoints();
  //     console.log('Previous Page:', this.currentPage);
  //   }
  // }

  // // Method to go to the next page
  // nextPage() {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //     this.updateDisplayedEndpoints();
  //     console.log('Next Page:', this.currentPage);
  //   }
  // }


  // Method to handle click on an endpoint card
  onEndpointCardClick(endpoint: any) {
    if (this.selectedEndpointItem === endpoint) {
      // If the clicked card is already selected, unselect it
      this.selectedEndpointItem = null;
      this.selectedEndpointItem = false; // Hide the transaction parameter table
    } else {
      // If a different card is clicked, select it
      this.selectedEndpointItem = endpoint;
      // Fetch transaction parameters based on the clicked endpoint
      // Example: Replace this with your actual API call to fetch data
    }
  }

  // Method to handle row select in the transaction parameter table
  onListTransParamClicked() {
    // Your logic for handling row select in the transaction parameter table
    // Example: Open a dialog for detailed view
    this.visibleTransParamDialog = true;
  }

  onListTransParamUnClicked() {}

  // Method to handle dialog close event
  onCloseListDialog(event: any) {
    // Your logic for handling dialog close event
    this.visibleTransParamDialog = false;
  }

  // Method to handle loading state
  onLoading(isLoading: boolean) {
    // Your logic for handling loading state
    this.isLoading = isLoading;
  }
}
