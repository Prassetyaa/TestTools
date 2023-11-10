import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from './app-routing.module';
import {TransactionModule} from "./feature/transaction/transaction.module";
import {SharedModule} from "./shared/module/shared.module";
import {RuleModule} from "./feature/rule/rule.module";
import {LoginModule} from "./feature/login/login.module";
import {UserGroupModule} from "./feature/user-group/user-group.module";
import {TransParamModule} from "./feature/transaction-parameter/trans-param.module";
import {DashboardModule} from "./feature/dashboard/dashboard.module";
import {ConfirmationService, MessageService} from "primeng/api";
import {ResetPasswordModule} from "./feature/reset-password/reset-password.module";
import {FraudListModule} from "./feature/fraud-list/fraud-list.module";
import {BlackListModule} from "./feature/black-list/black-list.module";
import {WhiteListModule} from "./feature/white-list/white-list.module";
import {FraudListValueModule} from "./feature/fraud-list-value/fraud-list-value.module";
import {RuleGroupModule} from "./feature/rule-group/rule-group.module";
import {AlertInvestigationModule} from "./feature/alert-investigation/alert-investigation.module";
import {UserModule} from "./feature/user/user.module";
import {FraudReactionsModule} from "./feature/fraud-reactions/fraud-reactions.module";
import {RespCodeMappingModule} from "./feature/resp-code-mapping/resp-code-mapping.module";
import {InstitutionModule} from "./feature/institution/institution.module";
import {TransactionTypeModule} from "./feature/transaction-type/transaction-type.module";
import {ResponseCodeModule} from "./feature/response-code/response-code.module";
import {ExtIntISO8583Module} from "./feature/ext-int-iso8583/ext-int-iso8583.module";
import {AidParameterModule} from './feature/aid-parameter/aid-parameter.module';
import {NotifTemplateModule} from './feature/notification-template/notif-template.module';
import {RecipientSetupModule} from "./feature/recipient-setup/recipient-setup.module";
import {RecipientGroupModule} from "./feature/recipient-group/recipient-group.module";
import {UserAuditModule} from "./feature/user-audit/user-audit.module";
import {UserRoleModule} from "./feature/user-role/user-role.module";
import {ReportModule} from "./feature/report/report.module";
import { ExtIntJsonComponent } from './feature/ext-int-json/ext-int-json.component';
import {ExtIntJsonModule} from "./feature/ext-int-json/ext-int-json.module";
import { ResetPassDialogComponent } from './shared/component/reset-pass-dialog/reset-pass-dialog.component';
import { TestCaseModule } from './feature/test-case/test-case.module';
import { TestDataInstitutionModule } from './feature/test-data-institution/test-data-institution.module';
import { TestDataTerminalModule } from './feature/test-data-terminal/test-data-terminal.module';
import { TestDataMerchantModule } from './feature/test-data-merchant/test-data-merchant.module';
import { TestDataKeysModule } from './feature/test-data-keys/test-data-keys.module';
import { TestDataPanModule } from './feature/test-data-pan/test-data-pan.module';
import { MessageSettingModule } from './feature/message-setting/message-setting.module';
import { ConnectionSettingModule } from './feature/connection-setting/connection-setting.module';
import { KeyManagementModule } from './feature/key-management/key-management.module';
import { SchemeIso20022JsonModule } from './feature/scheme-iso20022-json/scheme-iso20022-json.module';
import { SchemeIso20022XmlModule } from './feature/scheme-iso20022-xml/scheme-iso20022-xml.module';
import { TestDataQrCodeModule } from './feature/test-data-qr-code/test-data-qr-code.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SharedModule,
    TransactionModule,
    RuleModule,
    LoginModule,
    UserGroupModule,
    TransParamModule,
    DashboardModule,
    ResetPasswordModule,
    FraudListModule,
    BlackListModule,
    WhiteListModule,
    FraudListValueModule,
    RuleGroupModule,
    AlertInvestigationModule,
    UserModule,
    FraudReactionsModule,
    RespCodeMappingModule,
    TransactionTypeModule,
    ResponseCodeModule,
    ExtIntISO8583Module,
    AidParameterModule,
    NotifTemplateModule,
    RecipientSetupModule,
    RecipientGroupModule,
    InstitutionModule,
    UserAuditModule,
    UserRoleModule,
    ReportModule,
    ExtIntJsonModule,
    TestCaseModule,
    TestDataInstitutionModule,
    TestDataTerminalModule,
    TestDataMerchantModule,
    TestDataKeysModule,
    TestDataPanModule,
    TestDataQrCodeModule,
    MessageSettingModule,
    ConnectionSettingModule,
    KeyManagementModule,
    SchemeIso20022JsonModule,
    SchemeIso20022XmlModule,
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
