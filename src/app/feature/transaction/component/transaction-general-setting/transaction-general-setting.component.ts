import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePathEnum } from 'src/app/shared/enum/route-path.enum';

@Component({
  selector: 'app-transaction-general-setting',
  templateUrl: './transaction-general-setting.component.html',
  styleUrls: ['./transaction-general-setting.component.css'],
})
export class TransactionGeneralSettingComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private ngZone: NgZone, private router: Router) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [''],
      schemeSetting: [''],
      connection: [''],
      testCaseType: [''],
    });
  }

  isValueNotValid() {}

  onSave(event: any) {}

  onClose() {
    this.ngZone.run(() => {
      this.router.navigate([RoutePathEnum.TRANSACTION_VIEW_PATH])
    })
  }
}
