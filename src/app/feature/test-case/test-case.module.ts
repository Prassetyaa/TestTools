import { NgModule } from '@angular/core';
import { TestCaseComponent } from './test-case.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { TestCaseDetailsComponent } from './component/test-case-details/test-case-details.component';
import { TestCaseGeneralSettingComponent } from './component/test-case-general-setting/test-case-general-setting.component';
import { TestCaseEmvComponent } from './component/test-case-emv/test-case-emv.component';
import { TestCaseFieldSettingComponent } from './component/test-case-field-setting/test-case-field-setting.component';
import { TestCaseFieldSettingDialogComponent } from './component/test-case-field-setting-dialog/test-case-field-setting-dialog.component';
import { TestCaseActionComponent } from './component/test-case-action/test-case-action.component';
import { TestCaseActionDialogComponent } from './component/test-case-action-dialog/test-case-action-dialog.component';



@NgModule({
  declarations: [
    TestCaseComponent,
    TestCaseDetailsComponent,
    TestCaseGeneralSettingComponent,
    TestCaseEmvComponent,
    TestCaseFieldSettingComponent,
    TestCaseFieldSettingDialogComponent,
    TestCaseActionComponent,
    TestCaseActionDialogComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TestCaseComponent
  ]
})
export class TestCaseModule { }
