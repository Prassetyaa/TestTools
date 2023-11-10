import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConnectionSettingDomain } from './domain/connection-setting.domain';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  selector: 'app-connection-setting',
  templateUrl: './connection-setting.component.html',
  styleUrls: ['./connection-setting.component.css']
})
export class ConnectionSettingComponent implements OnInit {


  formGroup!: FormGroup;
  connectionSettingItems: ConnectionSettingDomain[] = [];
  selectedConnectionSetting: ConnectionSettingDomain | undefined;
  

  visibleConnectionSettingDialog: boolean = false;
  dialogMode: string = '';

  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private confirmService: ConfirmService) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      uniqueKey: [''],
      ipAddress: [''],
      localIp: ['']
    })
  }

  onSearchClicked(event: any) {

  }

  onListClicked() {
    
  }

  onListUnClicked() {

  }

  onClickedAddConnectionSetting() {
    this.dialogMode = 'ADD';
    this.visibleConnectionSettingDialog = true;
  }

  onClickedEditConnectionSetting() {
    this.dialogMode = 'EDIT';
    this.visibleConnectionSettingDialog = true;
  }

  onClickedDeleteConnectionSetting() {
    this.confirmService.showDialogConfirm(() => {
      
    })
  }

  onCloseListDialog(stat: boolean) {
    this.visibleConnectionSettingDialog = stat;
  }

  onLoading(stat: boolean) {
    this.isLoading = stat;
  }

}
