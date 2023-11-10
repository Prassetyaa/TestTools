import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestDataTerminalDomain } from './domain/test-data-terminal.domain';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  selector: 'app-test-data-terminal',
  templateUrl: './test-data-terminal.component.html',
  styleUrls: ['./test-data-terminal.component.css'],
})
export class TestDataTerminalComponent implements OnInit {
  formGroup!: FormGroup;
  terminals: TestDataTerminalDomain[] = [];
  selectedTerminal: TestDataTerminalDomain | undefined;
  isLoading: boolean = false;
  visibleTerminalDialog: boolean = false;
  dialogMode: string = '';

  constructor(
    private fb: FormBuilder,
    private confirmService: ConfirmService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [''],
      merchant: [''],
      currencyCode: [''],
      comment: [''],
    });
  }

  onListClicked() {}

  onListUnClicked() {}

  onSearchClicked(event: any) {}

  onClickedAddTerminal() {
    this.dialogMode = 'ADD';
    this.visibleTerminalDialog = true;
  }

  onClickedEditTerminal() {
    this.dialogMode = 'EDIT';
    this.visibleTerminalDialog = true;
  }

  onClickedDeleteTerminal() {
    this.confirmService.showDialogConfirm(() => {
      this.isLoading = true;
    })
  }

  onCloseListDialog(stat: boolean) {
    this.visibleTerminalDialog = stat;
  }

  onLoading(stat: boolean) {
    this.isLoading = stat;
  }
}
