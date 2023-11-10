import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestDataMerchantDomain } from '../../domain/test-data-merchant.domain';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StringUtils } from 'src/app/shared/utils/string.utils';
import { TestDataMerchantService } from '../../service/test-data-merchant.service';

@Component({
  selector: 'app-test-data-merchant-dialog',
  templateUrl: './test-data-merchant-dialog.component.html',
  styleUrls: ['./test-data-merchant-dialog.component.css'],
})
export class TestDataMerchantDialogComponent {
  @Input() isOpen: boolean = true;
  @Input() dialogMode: string = 'ADD';
  @Input() itemSelected!: TestDataMerchantDomain | undefined;
  @Output() closeSelf = new EventEmitter<boolean>();
  @Output() isLoading = new EventEmitter<boolean>();

  formGroup!: FormGroup;

  protected readonly StringUtils = StringUtils;

  constructor(private fb: FormBuilder, private merchantService: TestDataMerchantService) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      merchantNumber: [''],
      name: [''],
      acquirer: [''],
      categoryCode: [''],
      comment: [''],
    });
  }

  onDialogVisible() {}

  isValueNotValid() {}

  onSave(event: any) {
    this.merchantService.onAddMerchantDispatch(event)
  }

  onClose() {
    this.formGroup.reset();
    this.closeSelf.emit(false);
  }
}
