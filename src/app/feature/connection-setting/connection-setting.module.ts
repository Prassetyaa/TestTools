import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionSettingComponent } from './connection-setting.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { ConnectionSettingDialogComponent } from './component/connection-setting-dialog/connection-setting-dialog.component';

@NgModule({
  declarations: [ConnectionSettingComponent, ConnectionSettingDialogComponent],
  imports: [SharedModule],

  exports: [ConnectionSettingComponent],
})
export class ConnectionSettingModule {}
