import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestDataKeysDomain } from './domain/test-data-keys.domain';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  selector: 'app-test-data-keys',
  templateUrl: './test-data-keys.component.html',
  styleUrls: ['./test-data-keys.component.css']
})
export class TestDataKeysComponent implements OnInit {

  formGroup!: FormGroup;
  keys: TestDataKeysDomain[] = [];
  selectedKey: TestDataKeysDomain | undefined;
  isLoading: boolean = false;


  visibleKeysDialog: boolean = false;
  dialogMode: string = '';


  constructor(private fb: FormBuilder, private confirmService: ConfirmService) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [''],
      keyValue: [''],
      keyCheckValue: [''],
      comment: ['']
    })
  }


  onListClicked() {

  }

  onListUnClicked() {

  }

  onClickedAddKey() {
    this.dialogMode = 'ADD';
    this.visibleKeysDialog = true;
  }

  onClickedEditKey() {
    this.dialogMode = 'EDIT';
    this.visibleKeysDialog = true;
  }

  onClickedDeleteKey() {
    this.confirmService.showDialogConfirm(() => {

    })
  }

  onLoading(stat: boolean) {
    this.isLoading = stat;
  }

  onCloseListDialog(stat: boolean) {
    this.visibleKeysDialog = stat;
  }


  onSearchClicked(event: any) {

  }

}
