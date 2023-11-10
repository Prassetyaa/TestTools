import { NgModule } from '@angular/core';
import { TestDataKeysComponent } from './test-data-keys.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { TestDataKeysDialogComponent } from './component/test-data-keys-dialog/test-data-keys-dialog.component';



@NgModule({
  declarations: [
    TestDataKeysComponent,
    TestDataKeysDialogComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TestDataKeysComponent
  ]
})
export class TestDataKeysModule { }
