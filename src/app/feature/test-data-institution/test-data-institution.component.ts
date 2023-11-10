import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StringUtils } from 'src/app/shared/utils/string.utils';
import { TestDataInstitutionDomain } from './domain/test-data-institution';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { InstitutionService } from '../institution/service/institution.service';
import { TestDataInstitutionService } from './service/test-data-institution.service';


@Component({
  selector: 'app-test-data-institution',
  templateUrl: './test-data-institution.component.html',
  styleUrls: ['./test-data-institution.component.css']
})
export class TestDataInstitutionComponent implements OnInit {

  protected readonly StringUtils = StringUtils;

  formGroup!: FormGroup;
  authorities: string[] = []
  institutions: TestDataInstitutionDomain[] = [];
  selectedInstitution: TestDataInstitutionDomain | undefined;
  isLoading: boolean = false;
  visibleSearchDialog: boolean = false;
  visibleInstitutionDialog: boolean = false;
  dialogMode: string = ''

  searchFilterFields = new Map<number, any[]>([
    [
      0,
      [
        { name: 'External Version', type: 2, field: 'externalVersion' },
        { name: 'Internal Revision', type: 1, field: 'internalRevision' },
        {name: 'Secondary ID', type: 1, field: 'secondaryId'},
      ],
    ],
    [
      1,
      [
        {name: 'comment', type: 1, field: 'comment'},
        {},
        {}
      ]
    ]
  ]);

  constructor(private fb: FormBuilder, private confirmService: ConfirmService, private institutionService: TestDataInstitutionService) {

  }
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [''],
      institution: [''],
      fiid: [''],
      secondaryId: [''],
      externalVersion: [''],
      comment: [''],
      internalRevision: ['']
    })
    this.institutionService.onGetInstitutionManagement();

  }

  onListClicked() {

  }

  onListUnClicked() {

  }

  showAddtSearchFilter() {
    this.visibleSearchDialog = !this.visibleSearchDialog;
  }

  onClose() {
    this.formGroup.reset();
    this.visibleSearchDialog = false;
  }


  onSearchClicked(event: any) {

  }

  onReset() {

  }

  onLoading(stat: boolean) {
    this.isLoading = stat;
  }

  onCloseListDialog(stat: boolean) {
    this.visibleInstitutionDialog = stat;
  }

  onClickedAddInstitution() {
    this.dialogMode = 'ADD';
    this.visibleInstitutionDialog = true;
  }

  onClickedEditInstitution() {
    this.dialogMode = 'EDIT';
    // this.isLoading = true;
    this.visibleInstitutionDialog = true;
  }

  onClickedDeleteInstitution() {
    this.confirmService.showDialogConfirm(() => {
      this.isLoading = true;
     
    });
  }

}
