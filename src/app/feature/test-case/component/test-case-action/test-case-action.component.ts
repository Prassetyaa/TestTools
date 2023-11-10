import { Component } from '@angular/core';

@Component({
  selector: 'app-test-case-action',
  templateUrl: './test-case-action.component.html',
  styleUrls: ['./test-case-action.component.css'],
})
export class TestCaseActionComponent {
  events: any[];
  visibleTestCaseDialog: boolean = false;
  selectedTestCase: any | undefined;
  dialogMode: string = '';
  isLoading: boolean = false;

  constructor() {
    this.events = [
      {
        status: 'Transactions',
        date: '15/10/2020 10:30',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0',
        image: 'game-controller.jpg',
      },
      {
        status: 'Condition Transfer',
        date: '15/10/2020 14:00',
        icon: 'pi pi-cog',
        color: '#673AB7',
      },
      {
        status: 'Send Transfer Request',
        date: '15/10/2020 16:15',
        icon: 'pi pi-check',
        color: '#FF9800',
      },
    ];
  }

  onAddTestAction() {
    this.dialogMode = 'ADD';
    this.visibleTestCaseDialog = true;
  }

  onCloseListDialog(stat: boolean) {
    this.visibleTestCaseDialog = stat;
  }

  onLoading(stat: boolean) {
    this.isLoading = stat;
  }
}
