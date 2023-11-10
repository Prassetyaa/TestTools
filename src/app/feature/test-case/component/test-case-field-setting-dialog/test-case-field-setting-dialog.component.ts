import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StringUtils } from 'src/app/shared/utils/string.utils';

@Component({
  selector: 'app-test-case-field-setting-dialog',
  templateUrl: './test-case-field-setting-dialog.component.html',
  styleUrls: ['./test-case-field-setting-dialog.component.css']
})
export class TestCaseFieldSettingDialogComponent implements OnInit {
  @Input() isOpen: boolean = true;
  @Input() dialogMode: string = 'ADD';
  @Input() itemSelected!: any | undefined;
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
