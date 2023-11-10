import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestDataPanDomain } from '../../domain/test-data-pan.domain';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StringUtils } from 'src/app/shared/utils/string.utils';
import { TestDataPanService } from '../../service/test-data-pan.service';

@Component({
  selector: 'app-test-data-pan-dialog',
  templateUrl: './test-data-pan-dialog.component.html',
  styleUrls: ['./test-data-pan-dialog.component.css'],
})
export class TestDataPanDialogComponent implements OnInit {
  @Input() isOpen: boolean = true;
  @Input() dialogMode: string = 'ADD';
  @Input() itemSelected!: TestDataPanDomain | undefined;
  @Output() closeSelf = new EventEmitter<boolean>();
  @Output() isLoading = new EventEmitter<boolean>();

  formGroup!: FormGroup;

  protected readonly StringUtils = StringUtils;

  constructor(private fb: FormBuilder, private panService: TestDataPanService) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      pan: [''],
      cardHolderName: [''],
      issuer: [''],
      comment: [''],
      externalVersion: [''],
      internalRevision: [''],

    });
  }

  onDialogVisible() {}

  isValueNotValid() {}

  onSave(event: any) {
   this.panService.addPanManagement(event);
  }

  onClose() {
    this.formGroup.reset();
    this.closeSelf.emit(false);
  }
}
