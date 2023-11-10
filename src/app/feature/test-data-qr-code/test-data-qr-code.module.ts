import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDataQrCodeComponent } from './test-data-qr-code.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { TestDataQrCodeDialogComponent } from './component/test-data-qr-code-dialog/test-data-qr-code-dialog.component';



@NgModule({
  declarations: [
    TestDataQrCodeComponent,
    TestDataQrCodeDialogComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TestDataQrCodeComponent
  ]
})
export class TestDataQrCodeModule { }
