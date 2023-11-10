import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestCaseDomain } from './domain/test-case.domain';
import { StringUtils } from 'src/app/shared/utils/string.utils';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.css'],
})
export class TestCaseComponent implements OnInit {


  protected readonly StringUtils = StringUtils;

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [''],
      schemeSetting: [''],
      testCase: ['']
    })
  }

  formGroup!: FormGroup;
  testCaseItems: any[] = [
    {
      "id": 1,
      "name": "Item A",
      "schemeSetting": "value1",
      "testCaseType": "Type A"
    },
    {
      "id": 2,
      "name": "Item B",
      "schemeSetting": "value2",
      "testCaseType": "Type B"
    },
    {
      "id": 3,
      "name": "Item C",
      "schemeSetting": "value3",
      "testCaseType": "Type C"
    }
  ]
  
  selectedTestCase: TestCaseDomain | undefined;
  authorities: string[] = [];
  isLoading: boolean = false;
  

  


  onSearchClicked(event: any) {

  }

  onListClicked() {}

  onListUnClicked() {
    this.selectedTestCase = undefined;
  }

  onDetailClicked(event: any) {}

  onClickedAddTestCase() {

  }

  onClickedEditTestCase() {

  }

  onClickedDeleteTestCase() {

  }
}
