import { Component, EventEmitter, NgZone, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actions, ofActionSuccessful, ofActionCompleted } from '@ngxs/store';
import { Subject, takeUntil } from 'rxjs';
import { MessageConfigurationDomain } from 'src/app/feature/ext-int-iso8583/domain/message-configuration.domain';
import { ExtIntISO8583Service } from 'src/app/feature/ext-int-iso8583/service/ext-int-iso8583.service';
import { MessageConfigurationUpdate } from 'src/app/feature/ext-int-iso8583/state/ext-int-iso8583.actions';
import { RoutePathEnum } from 'src/app/shared/enum/route-path.enum';
import { StringUtils } from 'src/app/shared/utils/string.utils';

@Component({
  selector: 'app-iso20022-json-general-settings',
  templateUrl: './iso20022-json-general-settings.component.html',
  styleUrls: ['./iso20022-json-general-settings.component.css']
})
export class Iso20022JsonGeneralSettingsComponent {
  @Output() isLoading = new EventEmitter<boolean>()

  private destroyer$ = new Subject();
  form!: FormGroup;
  msgConfiguration: any | undefined
  dummyStatus = StringUtils.dummyStatus
  dummyType = [
    {
      msgId: 2,
      name: 'JSON'
    }
  ]

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private fb: FormBuilder,
    private action$: Actions,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      msgType: ['', Validators.required],
      hasHeader: ['', Validators.required],
      description: [''],
    })
  }

  ngOnDestroy() {
    this.destroyer$.next(true)
    this.destroyer$.complete()
  }

  onSave(value: any) {
    this.isLoading.emit(true)

    const fixData = new MessageConfigurationDomain()
    fixData.name = value.name
    fixData.msgType = value.msgType
    fixData.hasHeader = value.hasHeader.code
    fixData.description = value.description

    if (this.msgConfiguration != undefined)
      fixData.configId = this.msgConfiguration?.configId
  }

  isValueNotValid() {
    const stat = this.getNameField()?.hasError('required') || this.getTypeField()?.hasError('required')
    this.getHeaderField()?.hasError('required') || this.getDescriptionField()?.hasError('required')
    return stat != undefined ? stat : true
  }

  getNameField() {
    return this.form.get('name')
  }

  getTypeField() {
    return this.form.get('msgType')
  }

  getHeaderField() {
    return this.form.get('hasHeader')
  }

  getDescriptionField() {
    return this.form.get('description')
  }

  onClose() {
    this.ngZone.run(() => {
      this.router.navigate([RoutePathEnum.EXT_INT_JSON_VIEW_PATH])
    })
  }
}
