import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Actions, ofActionCompleted, ofActionSuccessful} from "@ngxs/store";
import {Subject, takeUntil} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InstitutionDomain} from "../../domain/institution.domain";
import {StringUtils} from "../../../../shared/utils/string.utils";
import {InstitutionService} from "../../service/institution.service";
import {InstitutionAdd, InstitutionUpdate} from "../../state/institution.actions";
import {Router} from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-institution-dialog',
  templateUrl: './institution-dialog.component.html',
  styleUrls: ['./institution-dialog.component.css']
})
export class InstitutionDialogComponent implements OnInit, OnDestroy {
  @Input() isOpen: boolean = true
  @Input() dialogMode: string = 'ADD'
  @Input() itemSelected: InstitutionDomain | undefined
  @Output() closeSelf = new EventEmitter<boolean>();
  @Output() isLoading = new EventEmitter<boolean>();
  institutions: InstitutionDomain[] = [];

  private destroyer$ = new Subject();
  protected readonly StringUtils = StringUtils;
  data: any;

  form!: FormGroup;

  currentName: string = '';

 public getJsonValue: any;
 public postJsonValue: any;

  constructor(
    private action$: Actions,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      institutionName: ['', Validators.required],
      description: ['', Validators.required],
    })

    this.action$
      .pipe(
        ofActionSuccessful(InstitutionAdd, InstitutionUpdate),
        takeUntil(this.destroyer$)
      ).subscribe(() => { this.onClose() })

    this.getMethod();
    this.postMethod();

    
  }
// NEW CODE (DON'T KNOW IT'S TRUE OR NO)=======================================================================================
 public getMethod(){
  this.http.get('http://192.168.0.108:8080/institution').subscribe((data)=> {
    console.log(data);
    this.getJsonValue = data;
  }); 
 }
// ======================================================================================================================================
// THIS A NEW TO CODE=============================================================================================================

  public postMethod(){
    const header = new HttpHeaders({
      contentType: 'application/json'
    })
    let body ={
      title: 'Quick',
      body: 'code',
      userId: 1,
    };
    this.http.post('http://192.168.0.108:8080/institution',body,{headers: header}).subscribe((data) =>{
      console.log(data);
      this.postJsonValue = data;
    });
  }
// =============================================================================================================
ngOnDestroy() {
    this.destroyer$.next(true)
    this.destroyer$.complete()
  }

  onDialogVisible() {
    if (this.dialogMode == 'EDIT') {
      this.currentName = this.itemSelected != undefined ? this.itemSelected.institutionName : ''

      this.getNameField()?.setValue(this.itemSelected?.institutionName)
      this.getDescriptionField()?.setValue(this.itemSelected?.description)
    }

    this.isLoading.emit(false)
  }

  
// ================================================================================================================
  onClose() {
    this.form.reset()
    this.closeSelf.emit(false)
  }

  isValueNotValid() {
    const stat = this.getNameField()?.getRawValue() == '' || this.getDescriptionField()?.hasError('required')
    return stat != undefined ? stat : true
  }

  getNameField() {
    return this.form.get('institutionName')
  }

  getDescriptionField() {
    return this.form.get('description')
  }
}

