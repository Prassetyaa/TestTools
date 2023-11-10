import { NgModule } from '@angular/core';
import { TestDataPanComponent } from './test-data-pan.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { TestDataPanDialogComponent } from './component/test-data-pan-dialog/test-data-pan-dialog.component';

@NgModule({
  declarations: [TestDataPanComponent, TestDataPanDialogComponent],
  imports: [SharedModule],

  exports: [TestDataPanComponent],
})
export class TestDataPanModule {}
