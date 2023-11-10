import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestDataQrCodeDomain } from '../../domain/test-data-qr-code.domain';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StringUtils } from 'src/app/shared/utils/string.utils';

@Component({
  selector: 'app-test-data-qr-code-dialog',
  templateUrl: './test-data-qr-code-dialog.component.html',
  styleUrls: ['./test-data-qr-code-dialog.component.css']
})
export class TestDataQrCodeDialogComponent implements OnInit {
  @Input() isOpen: boolean = true;
  @Input() dialogMode: string = 'ADD';
  @Input() itemSelected!: TestDataQrCodeDomain | undefined;
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
