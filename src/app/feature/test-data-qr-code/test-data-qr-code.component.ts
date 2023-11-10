import { Component, OnInit } from '@angular/core';
import { TestDataQrCodeDomain } from './domain/test-data-qr-code.domain';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  selector: 'app-test-data-qr-code',
  templateUrl: './test-data-qr-code.component.html',
  styleUrls: ['./test-data-qr-code.component.css']
})
export class TestDataQrCodeComponent implements OnInit {

  formGroup!: FormGroup;
  qrs: TestDataQrCodeDomain[] = [];
  selectedQr: TestDataQrCodeDomain | undefined;
  isLoading: boolean = false;
  visibleQrCodeDialog: boolean = false;
  dialogMode: string = '';

  constructor(private fb: FormBuilder, private confirmService: ConfirmService) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      pan: [''],
      cardholderName: [''],
      issuer: ['']
    })
  }

  onListClicked() {}

  onListUnClicked() {}

  onCloseListDialog(stat: boolean) {
    this.visibleQrCodeDialog = stat
  }

  onLoading(stat: boolean) {
    this.isLoading = stat
  }

  onSearchClicked(event: any) {

  }

  onClickedAddPan() {
    this.dialogMode = 'ADD';
    this.visibleQrCodeDialog = true;
  }

  onClickedEditPan() {
    this.dialogMode = 'EDIT';
    this.visibleQrCodeDialog = true;
  }

  onClickedDeletePan() {
    this.confirmService.showDialogConfirm(() => {

    })
  }
}
