import { NgModule } from '@angular/core';
import { TestDataTerminalComponent } from './test-data-terminal.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { TestDataTerminalDialogComponent } from './component/test-data-terminal-dialog/test-data-terminal-dialog.component';



@NgModule({
  declarations: [
    TestDataTerminalComponent,
    TestDataTerminalDialogComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TestDataTerminalComponent
  ]
})
export class TestDataTerminalModule { }
