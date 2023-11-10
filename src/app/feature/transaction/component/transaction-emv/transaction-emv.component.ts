import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmvDomain } from 'src/app/feature/test-case/domain/emv.domain';
import { AuthService } from 'src/app/shared/services/auth.service';
import { StringUtils } from 'src/app/shared/utils/string.utils';

@Component({
  selector: 'app-transaction-emv',
  templateUrl: './transaction-emv.component.html',
  styleUrls: ['./transaction-emv.component.css']
})
export class TransactionEmvComponent implements OnInit {
  protected readonly StringUtils = StringUtils;

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      tag: [''],
      name: [''],
      sourceType: [''],
      value: [''],
    });
  }

  formGroup!: FormGroup;
  emvItems: EmvDomain[] = [];
  selectedEmv: EmvDomain | undefined;
  authorities: string[] = [];
  isLoading: boolean = false;

  onSearchClicked(event: any) {}

  onListClicked() {}

  onListUnClicked() {
    this.selectedEmv = undefined;
  }

  onDetailClicked(event: any) {}

  onReset() {}

  onClickedAddEmv() {}

  onClickedEditEmv() {}

  onClickedDeleteEmv() {}
}

