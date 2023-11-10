import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageSettingComponent } from './message-setting.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { MessageSettingDialogComponent } from './component/message-setting-dialog/message-setting-dialog.component';



@NgModule({
  declarations: [
    MessageSettingComponent,
    MessageSettingDialogComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MessageSettingComponent
  ]
})
export class MessageSettingModule { }
