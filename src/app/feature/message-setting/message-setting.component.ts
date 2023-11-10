import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageSettingDomain } from './domain/message-setting.domain';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  selector: 'app-message-setting',
  templateUrl: './message-setting.component.html',
  styleUrls: ['./message-setting.component.css'],
})
export class MessageSettingComponent implements OnInit {
  formGroup!: FormGroup;
  messageSettingItems: MessageSettingDomain[] = [];
  selectedMessageSetting: MessageSettingDomain | undefined;
  selectedMessage: MessageSettingDomain | undefined;
  isLoading: boolean = false;
  visibleMessageDialog: boolean = false;
  dialogMode: string = '';

  constructor(private fb: FormBuilder, private confirmService: ConfirmService) {}


  ngOnInit(): void {
    this.formGroup = this.fb.group({
      listName: [''],
      entityType: ['']
    })
  }

  onReset() {

  }

  onSearchClicked(event: any) {

  }

  onListClicked() {

  }

  onListUnClicked() {

  }

  onCloseListDialog(stat: boolean) {
    this.visibleMessageDialog = stat;
  }

  onLoading(stat: boolean) {
    this.isLoading = stat;
  }

  onClickedAddListDialog() {
    this.dialogMode = 'ADD';
    this.visibleMessageDialog = true;
  }

  onClickedEditListDialog() {
    this.dialogMode = 'EDIT';
    this.visibleMessageDialog = true;
  }

  onClickedDeleteList() {
    this.confirmService.showDialogConfirm(() => {
      
    })
  }
}
