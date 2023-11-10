import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDataInstitutionComponent } from './test-data-institution.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { TestDataInstitutionDialogComponent } from './component/test-data-institution-dialog/test-data-institution-dialog.component';
import { TestDataInstitutionService } from './service/test-data-institution.service';

@NgModule({
  declarations: [
    TestDataInstitutionComponent,
    TestDataInstitutionDialogComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TestDataInstitutionComponent
  ],
  providers: [
    TestDataInstitutionService
  ]
})
export class TestDataInstitutionModule { }
