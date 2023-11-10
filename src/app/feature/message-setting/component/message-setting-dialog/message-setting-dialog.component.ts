import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageSettingDomain } from '../../domain/message-setting.domain';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StringUtils } from 'src/app/shared/utils/string.utils';

@Component({
  selector: 'app-message-setting-dialog',
  templateUrl: './message-setting-dialog.component.html',
  styleUrls: ['./message-setting-dialog.component.css'],
})
export class MessageSettingDialogComponent implements OnInit {
  @Input() isOpen: boolean = true;
  @Input() dialogMode: string = 'ADD';
  @Input() itemSelected!: MessageSettingDomain | undefined;
  @Output() closeSelf = new EventEmitter<boolean>();
  @Output() isLoading = new EventEmitter<boolean>();

  formGroup!: FormGroup;

  protected readonly StringUtils = StringUtils;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      test: [''],
    });
  }

  onDialogVisible() {}

  isValueNotValid() {}

  onSave(event: any) {}

  onClose() {
    this.formGroup.reset();
    this.closeSelf.emit(false);
  }
}
