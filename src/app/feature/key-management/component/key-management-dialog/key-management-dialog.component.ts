import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeyManagementDomain } from '../../domain/key-management.domain';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StringUtils } from 'src/app/shared/utils/string.utils';

@Component({
  selector: 'app-key-management-dialog',
  templateUrl: './key-management-dialog.component.html',
  styleUrls: ['./key-management-dialog.component.css']
})
export class KeyManagementDialogComponent implements OnInit {
  @Input() isOpen: boolean = true;
  @Input() dialogMode: string = 'ADD';
  @Input() itemSelected!: KeyManagementDomain | undefined;
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
