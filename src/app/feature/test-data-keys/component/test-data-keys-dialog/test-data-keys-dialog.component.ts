import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestDataKeysDomain } from '../../domain/test-data-keys.domain';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StringUtils } from 'src/app/shared/utils/string.utils';
import { TestDataKeysService } from '../../service/test-data-keys.service';

@Component({
  selector: 'app-test-data-keys-dialog',
  templateUrl: './test-data-keys-dialog.component.html',
  styleUrls: ['./test-data-keys-dialog.component.css'],
})
export class TestDataKeysDialogComponent implements OnInit {
  @Input() isOpen: boolean = true;
  @Input() dialogMode: string = 'ADD';
  @Input() itemSelected!: TestDataKeysDomain | undefined;
  @Output() closeSelf = new EventEmitter<boolean>();
  @Output() isLoading = new EventEmitter<boolean>();

  formGroup!: FormGroup;

  protected readonly StringUtils = StringUtils;

  constructor(private fb: FormBuilder, private keyService: TestDataKeysService) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [''],
      keyValue: [''],
      keyCheckValue: [''],
      comment: [''],

    });
  }

  onDialogVisible() {}

  isValueNotValid() {}

  onSave(event: any) {
this.keyService.addKeyManagement(event)
  }

  onClose() {
    this.formGroup.reset();
    this.closeSelf.emit(false);
  }
}
