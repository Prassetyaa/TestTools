import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {

  constructor() {

  }

  isLoading: boolean = false;
  activeIndex: number = 0

  ngOnInit(): void {
  }

  onTabChange(event: any) {
    this.activeIndex = event.index
    const className = document.querySelector('.first-container');

    if(event.index != 0) {
      if (!className?.classList.contains('tab-fit')) {
        className?.classList.add('tab-fit');
      }
    } else {
      className?.classList.remove('tab-fit');
    }
  }

}
