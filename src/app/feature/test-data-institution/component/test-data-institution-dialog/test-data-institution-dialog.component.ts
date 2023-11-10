import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StringUtils } from 'src/app/shared/utils/string.utils';
import { TestDataInstitutionDomain } from '../../domain/test-data-institution';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestDataInstitutionService } from '../../service/test-data-institution.service';

@Component({
  selector: 'app-test-data-institution-dialog',
  templateUrl: './test-data-institution-dialog.component.html',
  styleUrls: ['./test-data-institution-dialog.component.css']
})
export class TestDataInstitutionDialogComponent implements OnInit {
  @Input() isOpen: boolean = true
  @Input() dialogMode: string = 'ADD'
  @Input() itemSelected!: TestDataInstitutionDomain | undefined
  @Output() closeSelf = new EventEmitter<boolean>()
  @Output() isLoading = new EventEmitter<boolean>()

  formGroup!: FormGroup;

  protected readonly StringUtils = StringUtils;

// new
  constructor(private fb: FormBuilder, private institutionService: TestDataInstitutionService) { }
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [''],
      fiid: [''],
      secondaryId: [''],
      externalVersion: [''],
      comment: [''],
      internalRevison: [''],
    })
  }


  onDialogVisible() {

  }

  isValueNotValid() {

  }


// new
  onSave(event: any) {
    this.institutionService.onAddInstitutionManagement(event)

  }

  onClose() {
    this.formGroup.reset()
    this.closeSelf.emit(false)
  }

}
