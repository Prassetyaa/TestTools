import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmvDomain } from 'src/app/feature/test-case/domain/emv.domain';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { StringUtils } from 'src/app/shared/utils/string.utils';

@Component({
  selector: 'app-transaction-field-setting',
  templateUrl: './transaction-field-setting.component.html',
  styleUrls: ['./transaction-field-setting.component.css'],
})
export class TransactionFieldSettingComponent implements OnInit {
  protected readonly StringUtils = StringUtils;

  constructor(private confirmService: ConfirmService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      tag: [''],
      name: [''],
      sourceType: [''],
      value: [''],
    });
  }

  formGroup!: FormGroup;
  fieldSettingItems: EmvDomain[] = [];
  selectedFieldSetting: EmvDomain | undefined;
  authorities: string[] = [];
  isLoading: boolean = false;
  visibleFieldSettingDialog: boolean = false;
  dialogMode: string = '';

  onSearchClicked(event: any) {}

  onListClicked() {}

  onListUnClicked() {
    this.selectedFieldSetting = undefined;
  }

  onDetailClicked(event: any) {}

  onReset() {}
  
  onCloseListDialog(stat: boolean) {
    this.visibleFieldSettingDialog = stat;
  }

  onLoading(stat: boolean) {
    this.isLoading = stat;
  }

  onClickedAddFieldSetting() {
    this.dialogMode = 'ADD';
    this.visibleFieldSettingDialog = true;
  }

  onClickedEditFieldSetting() {
    this.dialogMode = 'EDIT';
    this.visibleFieldSettingDialog = true;
  }

  onClickedDeleteFieldSetting() {
    this.confirmService.showDialogConfirm(() => {
      
    })
  }
}
