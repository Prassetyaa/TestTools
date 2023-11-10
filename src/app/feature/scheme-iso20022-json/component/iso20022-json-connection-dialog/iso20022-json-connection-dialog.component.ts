import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StringUtils } from 'src/app/shared/utils/string.utils';

@Component({
  selector: 'app-iso20022-json-connection-dialog',
  templateUrl: './iso20022-json-connection-dialog.component.html',
  styleUrls: ['./iso20022-json-connection-dialog.component.css']
})
export class Iso20022JsonConnectionDialogComponent implements OnInit {
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
