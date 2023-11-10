import { Component, OnDestroy, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { TreeNode } from 'primeng/api';
import {
  Actions,
  ofActionCompleted,
  ofActionErrored,
  ofActionSuccessful,
  Select,
  Store,
} from '@ngxs/store';
import { forkJoin, Observable, Subject, takeUntil } from 'rxjs';
import { TransactionState } from './state/transaction.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from './service/transaction.service';
import {
  TransactionGet,
  TransactionGetAddtData,
  TransactionGetByQuery,
  TransactionGetTriggeredRule,
} from './state/transaction.actions';
import { AuthState } from '../../shared/auth/state/auth.state';
import { TransactionDomain } from './domain/transaction.domain';
import { UserDomain } from '../user/domain/user.domain';
import { TriggeredRuleDomain } from './domain/triggered-rule.domain';
import { DateUtils } from '../../shared/utils/date.utils';
import { StringUtils } from '../../shared/utils/string.utils';
import { AuthService } from '../../shared/services/auth.service';
import { RuleDomain } from '../rule/domain/rule.domain';
import { TransactionAddtDomain } from './domain/transaction-addt.domain';
import { IntResponseCodeDomain } from '../response-code/domain/int-response-code.domain';
import { ExtIntJSONService } from '../ext-int-json/service/ext-int-json.service';
import { ResponseCodeService } from '../response-code/service/response-code.service';
import { getIntRespCode } from '../ext-int-iso8583/state/ext-int-iso8583.actions';
import { ExtIntISO8583State } from '../ext-int-iso8583/state/ext-int-iso8583.state';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit, OnDestroy {
  private destroyer$ = new Subject();
  private intervalId: any;
  protected readonly StringUtils = StringUtils;
  protected readonly DateUtils = DateUtils;
  transactionQuery!: any[];
  formGroup!: FormGroup;
  intRespCodes: Array<IntResponseCodeDomain> = [];

  dummyAlertType: any[] = [];
    

  searchFilterFields = new Map<number, any[]>([
    [
      0,
      [
        { name: 'Card Number', type: 1, field: 'hpan' },
        { name: 'PID', type: 1, field: 'pid' },
        { name: 'Reference Number', type: 1, field: 'refNum' },
      ],
    ],
    [
      1,
      [
        { name: 'Fraud Flag', type: 2, field: 'fraudFlags' },
        { name: 'Response Code', type: 4, field: 'respCode' },
        { name: 'Transaction Type', type: 1, field: 'transType' },
      ],
    ],
    [
      2,
      [
        { name: 'Amount', type: 1, field: 'amount' },
        { name: 'Currency', type: 1, field: 'currency' },
        { name: 'Merchant Type', type: 1, field: 'merchantType' },
      ],
    ],
    [
      3,
      [
        { name: 'Terminal Id', type: 1, field: 'terminalId' },
        {
          name: 'Issuer Institution Id',
          type: 1,
          field: 'issInstitCode',
        },
        { name: 'Destination Institution Id', type: 1, field: 'desInstitCode' },
      ],
    ],
    [
      4,
      [
        { name: 'Acquire Institution Id', type: 1, field: 'acqInstitCode' },
        { name: 'Source Account', type: 1, field: 'acct1' },
        {
          name: 'Destination Account',
          type: 1,
          field: 'acct2',
        },
      ],
    ],
    [
      5,
      [
        { name: 'Ext Response Code', type: 1, field: 'extRespCode' },
        { name: 'Prc Code', type: 1, field: 'prcCode' },
        { name: 'Is Alerted', type: 3, field: 'isAlerted' },
      ],
    ],
    [
      6,
      [
        { name: 'Fee Amount', type: 1, field: 'feeAmount' },
        { name: 'Pos Data Code', type: 1, field: 'posDataCode' },
        { name: 'Terminal Address', type: 1, field: 'terminalAddress' },
      ],
    ],
    [7, [{ name: 'STAN', type: 1, field: 'stan' }, {}, {}]],
  ]);
  fraudFlags = [
    { name: 'Not Fraud', code: '0' },
    { name: 'Suspicious', code: '1' },
    { name: 'Fraud', code: '2' },
  ];
  isAlerted = [
    { name: 'Yes', code: true },
    { name: 'No', code: false },
  ];

  columns = [
    {header: 'Transaction Date'},
    {header: 'Transaction Type'},
    {header: 'Utrnno'},
    {header: 'HPAN'},
    {header: 'CIF id'},
    {header: 'Account'},
    {header: 'Amount'},
    {header: 'Currency Code'},
    {header: 'Response Code'},
    {header: 'Fraud Flag'},
    {header: ''}

  ]

  clearHpan: string = '';
  exportColumns: any[] | undefined;

  authorities: string[] = [];
  isChecked: boolean = false;

  selectedItem!: TransactionDomain;
  itemSelected: Map<string, object> = new Map<string, object>();
  items: Array<Map<string, object>> = [];
  triggeredRule: TreeNode[] = [];
  addtData: TransactionAddtDomain[] = [];

  visibleHPANDialog: boolean = false;
  visibleSearchDialog: boolean = false;
  visibleTransactionDialog: boolean = false;
  visibleActionDialog: boolean = false;
  visibleWhiteListDialog: boolean = false;
  visibleBlackListDialog: boolean = false;
  visibleFraudListDialog: boolean = false;
  visibleFraudFlagDialog: boolean = false;

  isLoading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private store$: Store,
    private action$: Actions,
    private transactionService: TransactionService,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      utrnno: [''],
      pid: [''],
      acct1: [''],
      acct2: [''],
      acqInstitCode: [''],
      issInstitCode: [''],
      desInstitCode: [''],
      amount: [''],
      feeAmount: [''],
      currency: [''],
      hpan: [''],
      transType: [''],
      posDataCode: [''],
      prcCode: [''],
      refNum: [''],
      extRespCode: [''],
      stan: [''],
      merchantType: [''],
      terminalId: [''],
      terminalAddress: [''],
      fraudFlags: [''],
      respCode: [''],
      isAlerted: [''],
      dateFrom: [''],
      dateTo: [''],
    });

    this.http.get<any>('assets/endpoint.json').subscribe((response) => {
      this.dummyAlertType = response;
    })
    
  }

  ngOnDestroy() {
    this.transactionService.onResetAllInformation((ctx) => {
      ctx.setState({
        ...ctx.getState(),
        triggeredRule: [],
      });
    });

    this.clearScheduler();

    this.destroyer$.next(true);
    this.destroyer$.complete();
  }

  

  showHPAN(hpan: String) {
    this.clearHpan = hpan.replace(/\./g, '1');
    this.visibleHPANDialog = !this.visibleHPANDialog;
  }

  isValueNotValid() {
    const stat =
      this.getUtrnnoField()?.getRawValue() == '' ||
      this.getDateFromField()?.hasError('required') ||
      this.getDateToField()?.hasError('required') ||
      this.getHpanField()?.hasError('required') ||
      this.getPidField()?.hasError('required') ||
      this.getRefNumField()?.hasError('required') ||
      this.getFraudFlagField()?.hasError('required') ||
      this.getRespCodeField()?.hasError('required') ||
      this.getTransTypeField()?.hasError('required') ||
      this.getAmountField()?.hasError('required') ||
      this.getCurrencyField()?.hasError('required') ||
      this.getMerchantTypeField()?.hasError('required') ||
      this.getTerminalIdField()?.hasError('required') ||
      this.getIssuerIdField()?.hasError('required') ||
      this.getDestinationIdField()?.hasError('required') ||
      this.getAcquireIdField()?.hasError('required') ||
      this.getSourceAccField()?.hasError('required') ||
      this.getDestAccField()?.hasError('required') ||
      this.getExtRespCodeField()?.hasError('required') ||
      this.getPrcCodeField()?.hasError('required') ||
      this.getPrcCodeField()?.hasError('required') ||
      this.getIsAlertedField()?.hasError('required') ||
      this.getFeeAmountField()?.hasError('required') ||
      this.getPosDataCodeField()?.hasError('required') ||
      this.getTerminalAddress()?.hasError('required') ||
      this.getStanField()?.hasError('required');
    return stat != undefined ? stat : true;
  }

  showAddtSearchFilter() {
    this.isLoading = true;
    this.transactionService.onFetchAllInformation((ctx) => {
      forkJoin([ctx.dispatch(new getIntRespCode())]).subscribe(() => {
        this.isLoading = false;
        this.visibleSearchDialog = true;
      });
    });
  }

  onClose() {
    this.formGroup.reset();
    this.visibleSearchDialog = false;
  }

  onReset() {
    this.isLoading = true;
    this.formGroup.reset();
    this.transactionService.onFetchAllTransaction();
    this.getDateFromField()?.setValue('');
    this.getDateToField()?.setValue('');
    this.visibleSearchDialog = false;
  }

  updateCheck(event: any) {
    if (event.checked.length > 0) {
      this.clearScheduler();

      this.intervalId = setInterval(() => {
        this.onSearchClicked(this.formGroup.getRawValue());
      }, 1000);
    } else {
      this.clearScheduler();
    }
  }

  clearScheduler() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  onSearchClicked(data: any) {
    this.isLoading = true;
    const dateFromField = this.getDateFromField();
    const dateToField = this.getDateToField();

    if (data.dateFrom != '') {
      data.dateFrom = DateUtils.ConvertToTimestampFormatV3(data.dateFrom);
    }
    if (data.dateTo != '') {
      data.dateTo = DateUtils.ConvertToTimestampFormatV3(data.dateTo);
    }

    if (data.fraudFlags) {
      data.fraudFlags = data.fraudFlags.code;
    }

    if (data.isAlerted) {
      data.isAlerted = data.isAlerted.code;
    }

    if (data.respCode) {
      data.respCode = data.respCode.code;
    }

    data.dateFrom = dateFromField?.value !== null ? data.dateFrom : '';
    data.dateTo = dateToField?.value !== null ? data.dateTo : '';

    const controls = this.formGroup.controls;

    for (const controlName in controls) {
      if (controls.hasOwnProperty(controlName)) {
        const controlValue = controls[controlName].value;
        if (
          controlValue != null &&
          controlValue != undefined &&
          controlValue != ''
        ) {
          this.transactionService.onFetchTransactionByQuery(data);
          return;
        }
      }
    }

    this.transactionService.onFetchAllTransaction();
  }

  onDetailClicked(item: any) {
    this.isLoading = true;
    this.selectedItem = item;
    this.itemSelected = new Map<string, object>(Object.entries(item));
    this.transactionService.onFetchAllInformation((ctx) => {
      forkJoin([
        ctx.dispatch(new TransactionGetTriggeredRule(item.utrnno)),
        ctx.dispatch(new TransactionGetAddtData(item.utrnno)),
      ]).subscribe(() => {
        this.isLoading = false;
        this.visibleTransactionDialog = true;
      });
    });
  }

  onCloseTransDialog(stat: boolean) {
    this.visibleTransactionDialog = stat;
    this.triggeredRule = [];
  }

  onActionClicked() {
    if (this.selectedItem != undefined) {
      this.visibleActionDialog = !this.visibleActionDialog;
      this.itemSelected = new Map<string, object>(
        Object.entries(this.selectedItem)
      );
    }
  }

  
  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p', 'px', 'a4');
        (doc as any).autoTable(this.exportColumns, this.items);
        doc.save('products.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.items);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  onRowClicked() {}

  onRowUnClicked() {}

  isTransDeclined(respCode: string) {
    if (respCode != '-1' && respCode != '201') {
      return 'resp-code-declined';
    } else return '';
  }

  isRuleTriggered(data: any): string {
    if (
      data.ruleTrigger > 0 &&
      (data.respCode == '-1' || data.respCode == '201')
    ) {
      return 'rule-trigger-color';
    } else if (
      (data.ruleTrigger > 0 || data.ruleTrigger < 0) &&
      (data.respCode != '-1' || data.respCode != '201')
    ) {
      return 'rule-trigger-decline-color';
    }
    return '';
  }

  checkExpandButtonStatus(data: any[]) {
    return data.length == 0;
  }

  checkExpandButtonStyle(data: any[]) {
    if (data.length == 0) {
      return {
        opacity: '0',
        cursor: 'none',
      };
    }
    return {
      opacity: '1',
      cursor: 'pointer',
    };
  }

  calculatePadding(lvl: number): string {
    if (lvl == 0) {
      return `${2}`;
    }
    const basePadding = 2; // 2rem as the base padding
    const paddingIncrement = .8 // 2rem as the increment for each level
    const totalPadding = basePadding + lvl * paddingIncrement;
    return `${totalPadding}`;
  }

  getUtrnnoField() {
    return this.formGroup.get('utrnno');
  }

  getDateFromField() {
    return this.formGroup.get('dateFrom');
  }

  getDateToField() {
    return this.formGroup.get('dateTo');
  }

  getHpanField() {
    return this.formGroup.get('HPAN');
  }

  getPidField() {
    return this.formGroup.get('pid');
  }

  getRefNumField() {
    return this.formGroup.get('refNum');
  }

  getFraudFlagField() {
    return this.formGroup.get('fraudFlags');
  }

  getRespCodeField() {
    return this.formGroup.get('respCode');
  }

  getTransTypeField() {
    return this.formGroup.get('transType');
  }

  getAmountField() {
    return this.formGroup.get('amount');
  }

  getCurrencyField() {
    return this.formGroup.get('currency');
  }

  getMerchantTypeField() {
    return this.formGroup.get('merchantType');
  }

  getTerminalIdField() {
    return this.formGroup.get('terminalId');
  }

  getIssuerIdField() {
    return this.formGroup.get('issInstitCode');
  }

  getDestinationIdField() {
    return this.formGroup.get('desInstitCode');
  }

  getAcquireIdField() {
    return this.formGroup.get('acqInstitCode');
  }

  getSourceAccField() {
    return this.formGroup.get('acct1');
  }

  getDestAccField() {
    return this.formGroup.get('acct2');
  }

  getExtRespCodeField() {
    return this.formGroup.get('extRespCode');
  }

  getPrcCodeField() {
    return this.formGroup.get('prcCode');
  }

  getIsAlertedField() {
    return this.formGroup.get('isAlerted');
  }

  getFeeAmountField() {
    return this.formGroup.get('feeAmount');
  }

  getPosDataCodeField() {
    return this.formGroup.get('posDataCode');
  }

  getTerminalAddress() {
    return this.formGroup.get('terminalAddress');
  }

  getStanField() {
    return this.formGroup.get('stan');
  }
}
