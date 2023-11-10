import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestDataMerchantDomain } from './domain/test-data-merchant.domain';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  selector: 'app-test-data-merchant',
  templateUrl: './test-data-merchant.component.html',
  styleUrls: ['./test-data-merchant.component.css'],
})
export class TestDataMerchantComponent implements OnInit {
  formGroup!: FormGroup;

  merchants: TestDataMerchantDomain[] = [];
  selectedMerchant: TestDataMerchantDomain | undefined;
  isLoading: boolean = false;

  visibleMerchantDialog: boolean = false;
  dialogMode: string = '';

  constructor(private fb: FormBuilder, private confirmService: ConfirmService) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      merchantNumber: [''],
      name: [''],
      acquirer: [''],
    });
  }

  onListClicked() {}

  onListUnClicked() {}

  onCloseListDialog(stat: boolean) {
    this.visibleMerchantDialog = stat;
  }

  onLoading(stat: boolean) {
    this.isLoading = stat;
  }

  onSearchClicked(event: any) {}

  onClickedAddMerchant() {
    this.dialogMode = 'ADD';
    this.visibleMerchantDialog = true;
  }

  onClickedEditMerchant() {
    this.dialogMode = 'EDIT';
    this.visibleMerchantDialog = true;
  }

  onClickedDeleteMerchant() {
    this.confirmService.showDialogConfirm(() => {
      
    })
  }
}
