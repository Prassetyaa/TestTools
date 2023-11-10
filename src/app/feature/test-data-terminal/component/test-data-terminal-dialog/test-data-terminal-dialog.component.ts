import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestDataTerminalDomain } from '../../domain/test-data-terminal.domain';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StringUtils } from 'src/app/shared/utils/string.utils';

@Component({
  selector: 'app-test-data-terminal-dialog',
  templateUrl: './test-data-terminal-dialog.component.html',
  styleUrls: ['./test-data-terminal-dialog.component.css']
})
export class TestDataTerminalDialogComponent implements OnInit {
  @Input() isOpen: boolean = true
  @Input() dialogMode: string = 'ADD'
  @Input() itemSelected!: TestDataTerminalDomain | undefined
  @Output() closeSelf = new EventEmitter<boolean>()
  @Output() isLoading = new EventEmitter<boolean>()

  formGroup!: FormGroup
  
  protected readonly StringUtils = StringUtils;


  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      test: ['']
    })
  }



  onDialogVisible() {

  }

  isValueNotValid() {

  }



  onSave(event: any) {

  }

  onClose() {
    this.formGroup.reset()
    this.closeSelf.emit(false)
  }

}
