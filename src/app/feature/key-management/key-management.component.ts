import { Component, OnInit } from '@angular/core';
import { KeyManagementDomain } from './domain/key-management.domain';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  selector: 'app-key-management',
  templateUrl: './key-management.component.html',
  styleUrls: ['./key-management.component.css'],
})
export class KeyManagementComponent implements OnInit {
  formGroup!: FormGroup;
  keyManagementItems: KeyManagementDomain[] = [];
  selectedKey: KeyManagementDomain | undefined;
  isLoading: boolean = false;

  visibleKeysDialog: boolean = false;
  dialogMode: string = '';

  constructor(
    private fb: FormBuilder,
    private confirmService: ConfirmService
  ) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [''],
      keyValue: [''],
      keyCheckValue: [''],
      comment: [''],
    });
  }

  onListClicked() {}

  onListUnClicked() {}

  onClickedAddKey() {
    this.dialogMode = 'ADD';
    this.visibleKeysDialog = true;
  }

  onClickedEditKey() {
    this.dialogMode = 'EDIT';
    this.visibleKeysDialog = true;
  }

  onClickedDeleteKey() {
    this.confirmService.showDialogConfirm(() => {});
  }

  onLoading(stat: boolean) {
    this.isLoading = stat;
  }

  onCloseListDialog(stat: boolean) {
    this.visibleKeysDialog = stat;
  }

  onSearchClicked(event: any) {}
}
