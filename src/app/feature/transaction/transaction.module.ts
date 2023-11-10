import {NgModule} from '@angular/core';
import {TransactionComponent} from "./transaction.component";
import {TransactionService} from "./service/transaction.service";
import {SharedModule} from "../../shared/module/shared.module";
import { WlistActionComponent } from './component/wlist-action/wlist-action.component';
import { BlistActionComponent } from './component/blist-action/blist-action.component';
import { TransDetailComponent } from './component/trans-detail/trans-detail.component';
import { FraudListActionComponent } from './component/fraud-list-action/fraud-list-action.component';
import {FraudFlagActionComponent} from "./component/fraud-flag-action/fraud-flag-action.component";
import { TransactionDetailsComponent } from './component/transaction-details/transaction-details.component';
import { TransactionGeneralSettingComponent } from './component/transaction-general-setting/transaction-general-setting.component';
import { TransactionFieldSettingComponent } from './component/transaction-field-setting/transaction-field-setting.component';
import { TransactionEmvComponent } from './component/transaction-emv/transaction-emv.component';
import { TransactionFieldSettingDialogComponent } from './component/transaction-field-setting-dialog/transaction-field-setting-dialog.component';
import { TransactionQrCodeComponent } from './component/transaction-qr-code/transaction-qr-code.component';

@NgModule({
  declarations: [
    TransactionComponent,
    WlistActionComponent,
    BlistActionComponent,
    TransDetailComponent,
    FraudListActionComponent,
    FraudFlagActionComponent,
    TransactionDetailsComponent,
    TransactionGeneralSettingComponent,
    TransactionFieldSettingComponent,
    TransactionEmvComponent,
    TransactionFieldSettingDialogComponent,
    TransactionQrCodeComponent
  ],
    exports: [
        TransactionComponent,
        TransDetailComponent
    ],
  imports: [
    SharedModule
  ],
  providers: [
    TransactionService
  ]
})
export class TransactionModule { }
