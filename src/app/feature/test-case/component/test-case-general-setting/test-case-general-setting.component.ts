import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-case-general-setting',
  templateUrl: './test-case-general-setting.component.html',
  styleUrls: ['./test-case-general-setting.component.css'],
})
export class TestCaseGeneralSettingComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [''],
      schemeSetting: [''],
      connection: [''],
      testCaseType: [''],
    });
  }

  isValueNotValid() {

  }

  onSave(event: any) {
    
  }

  onClose() {

  }
}
