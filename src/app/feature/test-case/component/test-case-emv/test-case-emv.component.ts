import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { StringUtils } from 'src/app/shared/utils/string.utils';
import { EmvDomain } from '../../domain/emv.domain';

@Component({
  selector: 'app-test-case-emv',
  templateUrl: './test-case-emv.component.html',
  styleUrls: ['./test-case-emv.component.css']
})
export class TestCaseEmvComponent implements OnInit {

  protected readonly StringUtils = StringUtils;

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      tag: [''],
      name: [''],
      sourceType: [''],
      value: ['']
    })
  }

  formGroup!: FormGroup;
  emvItems: EmvDomain[] = [];
  selectedEmv: EmvDomain | undefined;
  authorities: string[] = [];
  isLoading: boolean = false;
  

  


  onSearchClicked(event: any) {

  }

  onListClicked() {}

  onListUnClicked() {
    this.selectedEmv = undefined;
  }

  onDetailClicked(event: any) {}

  

  onReset() {

  }

  onClickedAddEmv() {

  }

  onClickedEditEmv() {

  }

  onClickedDeleteEmv() {

  }
}
