import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyManagementComponent } from './key-management.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { KeyManagementDialogComponent } from './component/key-management-dialog/key-management-dialog.component';



@NgModule({
  declarations: [
    KeyManagementComponent,
    KeyManagementDialogComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    KeyManagementComponent
  ]
})
export class KeyManagementModule { }
