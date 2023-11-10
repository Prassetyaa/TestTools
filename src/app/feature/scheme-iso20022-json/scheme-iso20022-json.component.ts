import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, Actions } from '@ngxs/store';
import { Subject } from 'rxjs';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { StringUtils } from 'src/app/shared/utils/string.utils';

@Component({
  selector: 'app-scheme-iso20022-json',
  templateUrl: './scheme-iso20022-json.component.html',
  styleUrls: ['./scheme-iso20022-json.component.css'],
})
export class SchemeIso20022JsonComponent implements OnInit {
  private destroyer$ = new Subject();
  protected readonly StringUtils = StringUtils;

  selectedItem: any | undefined;
  messageConfigurations: Array<any> = [
    {
      "configId": 101,
      "name": "Configuration A",
      "header": "Header A",
      "type": "Type X"
    },
    {
      "configId": 102,
      "name": "Configuration B",
      "header": "Header B",
      "type": "Type Y"
    },
    {
      "configId": 103,
      "name": "Configuration C",
      "header": "Header C",
      "type": "Type Z"
    }
  ]
  ;
  messageConfiguration: any | undefined;
  formGroup!: FormGroup;

  visibleMessageConfigurationDialog: boolean = false;
  isLoading: boolean = true;

  constructor(
    private store$: Store,
    private action$: Actions,
    private ngZone: NgZone,
    private router: Router,
    private confirmService: ConfirmService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: [''],
      hasHeader: [''],
      msgType: [2],
    });
  }

  ngOnDestroy() {
    this.destroyer$.next(true);
    this.destroyer$.complete();
  }

  onLoading(stat: boolean) {
    this.isLoading = stat;
  }

  onReset() {
    this.isLoading = true;
    this.formGroup.reset();
  }

  onSearchClicked(data: any) {
    this.isLoading = true;
    if (data.hasHeader) {
      data.hasHeader = data.hasHeader.code;
    }
    data.msgType = 2;

    const controls = this.formGroup.controls;

    for (const controlName in controls) {
      if (controls.hasOwnProperty(controlName)) {
        const controlValue = controls[controlName].value;
        if (controlValue != null && controlValue != '') {
          return;
        }
      }
    }
  }

  onConfigUnClicked() {
    this.selectedItem = undefined;
  }

  onClickedAddConfigDialog() {
    this.visibleMessageConfigurationDialog = true;
  }

  onClickedDeleteConfig() {
    this.confirmService.showDialogConfirm(() => {
      this.isLoading = true;
    });
  }

  onCloseConfigDialog(stat: boolean) {
    this.visibleMessageConfigurationDialog = stat;
  }
}
