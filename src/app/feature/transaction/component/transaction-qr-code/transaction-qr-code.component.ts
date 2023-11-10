import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePathEnum } from 'src/app/shared/enum/route-path.enum';

@Component({
  selector: 'app-transaction-qr-code',
  templateUrl: './transaction-qr-code.component.html',
  styleUrls: ['./transaction-qr-code.component.css']
})
export class TransactionQrCodeComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private ngZone: NgZone, private router: Router) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      qrCode: [''],
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
