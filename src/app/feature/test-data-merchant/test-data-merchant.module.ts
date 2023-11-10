import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDataMerchantComponent } from './test-data-merchant.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { TestDataMerchantDialogComponent } from './component/test-data-merchant-dialog/test-data-merchant-dialog.component';



@NgModule({
  declarations: [
    TestDataMerchantComponent,
    TestDataMerchantDialogComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TestDataMerchantComponent
  ]
})
export class TestDataMerchantModule { }
