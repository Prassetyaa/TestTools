import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestDataPanDomain } from './domain/test-data-pan.domain';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  selector: 'app-test-data-pan',
  templateUrl: './test-data-pan.component.html',
  styleUrls: ['./test-data-pan.component.css']
})
export class TestDataPanComponent implements OnInit {

  formGroup!: FormGroup;
  pans: TestDataPanDomain[] = [];
  selectedPan: TestDataPanDomain | undefined;
  isLoading: boolean = false;
  visiblePanDialog: boolean = false;
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
    this.visiblePanDialog = stat
  }

  onLoading(stat: boolean) {
    this.isLoading = stat
  }

  onSearchClicked(event: any) {

  }

  onClickedAddPan() {
    this.dialogMode = 'ADD';
    this.visiblePanDialog = true;
  }

  onClickedEditPan() {
    this.dialogMode = 'EDIT';
    this.visiblePanDialog = true;
  }

  onClickedDeletePan() {
    this.confirmService.showDialogConfirm(() => {

    })
  }

}
