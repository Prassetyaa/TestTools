import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-case-details',
  templateUrl: './test-case-details.component.html',
  styleUrls: ['./test-case-details.component.css']
})
export class TestCaseDetailsComponent implements OnInit {


  constructor() {

  }

  isLoading: boolean = false;
  activeIndex: number = 0

  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
