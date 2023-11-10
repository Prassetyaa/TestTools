import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemeIso20022XmlComponent } from './scheme-iso20022-xml.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { Iso20022XmlDetailsComponent } from './component/iso20022-xml-details/iso20022-xml-details.component';
import { Iso20022XmlGeneralSettingsComponent } from './component/iso20022-xml-general-settings/iso20022-xml-general-settings.component';
import { Iso20022XmlConnectionSettingsComponent } from './component/iso20022-xml-connection-settings/iso20022-xml-connection-settings.component';
import { Iso20022XmlMessageSettingsComponent } from './component/iso20022-xml-message-settings/iso20022-xml-message-settings.component';
import { Iso20022XmlMessageDialogsComponent } from './component/iso20022-xml-message-dialogs/iso20022-xml-message-dialogs.component';
import { Iso20022XmlConnectionDialogComponent } from './component/iso20022-xml-connection-dialog/iso20022-xml-connection-dialog.component';



@NgModule({
  declarations: [
    SchemeIso20022XmlComponent,
    Iso20022XmlDetailsComponent,
    Iso20022XmlGeneralSettingsComponent,
    Iso20022XmlConnectionSettingsComponent,
    Iso20022XmlMessageSettingsComponent,
    Iso20022XmlMessageDialogsComponent,
    Iso20022XmlConnectionDialogComponent
  ],
  imports: [
    SharedModule
  ], 
  exports: [
    SchemeIso20022XmlComponent
  ]
})
export class SchemeIso20022XmlModule { }
