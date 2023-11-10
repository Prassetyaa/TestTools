import { NgModule } from '@angular/core';
import { SchemeIso20022JsonComponent } from './scheme-iso20022-json.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { Iso20022JsonDetailsComponent } from './component/iso20022-json-details/iso20022-json-details.component';
import { Iso20022JsonGeneralSettingsComponent } from './component/iso20022-json-general-settings/iso20022-json-general-settings.component';
import { Iso20022JsonConnectionSettingsComponent } from './component/iso20022-json-connection-settings/iso20022-json-connection-settings.component';
import { Iso20022JsonMessageSettingsComponent } from './component/iso20022-json-message-settings/iso20022-json-message-settings.component';
import { Iso20022JsonConnectionDialogComponent } from './component/iso20022-json-connection-dialog/iso20022-json-connection-dialog.component';
import { Iso20022JsonMessageDialogComponent } from './component/iso20022-json-message-dialog/iso20022-json-message-dialog.component';


@NgModule({
  declarations: [
    SchemeIso20022JsonComponent,
    Iso20022JsonDetailsComponent,
    Iso20022JsonGeneralSettingsComponent,
    Iso20022JsonConnectionSettingsComponent,
    Iso20022JsonMessageSettingsComponent,
    Iso20022JsonConnectionDialogComponent,
    Iso20022JsonMessageDialogComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    SchemeIso20022JsonComponent
  ]
})
export class SchemeIso20022JsonModule { }
