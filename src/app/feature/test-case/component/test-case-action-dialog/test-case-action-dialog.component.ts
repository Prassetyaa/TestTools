import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Select, Actions } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { UserDomain } from 'src/app/feature/user/domain/user.domain';
import { UserService } from 'src/app/feature/user/service/user.service';
import { UserState } from 'src/app/feature/user/state/user.state';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { StringUtils } from 'src/app/shared/utils/string.utils';

@Component({
  selector: 'app-test-case-action-dialog',
  templateUrl: './test-case-action-dialog.component.html',
  styleUrls: ['./test-case-action-dialog.component.css'],
})
export class TestCaseActionDialogComponent {
  @Input() isOpen: boolean = false;
  @Input() itemSelected!: any | undefined;
  @Output() closeSelf = new EventEmitter<boolean>();
  @Output() isLoading = new EventEmitter<boolean>();
  @Input() dialogMode: string = 'ADD';

  protected readonly StringUtils = StringUtils;

  @Select(UserState.data) userList$!: Observable<UserDomain[]>;

  private destroyer$ = new Subject();

  form!: FormGroup;
  userList: Array<UserDomain> = [];
  userData!: UserDomain;
  visibleTransactionAddDialog: boolean = false;
  transactionForm!: FormGroup;
  transactionItems: any[] = [];
  selectedTransaction: any | undefined;
  no: number = 1;

  conditionTransfer = [
    {
      name: 'Success',
      code: true,
    },
    {
      name: 'Failed',
      code: false,
    },
  ];

  dummyTransaction = [
    {
      id: '1',
      transType: 'BII Fast',
      hpan: '4560123859320132',
      account: '0009807658234',
    },
    {
      id: '2',
      transType: 'Online Purchase',
      hpan: '6014789523156842',
      account: '0098765432101',
    },
    {
      id: '3',
      transType: 'ATM Withdrawal',
      hpan: '5123567890123456',
      account: '0012345678907',
    },
    {
      id: '4',
      transType: 'POS Transaction',
      hpan: '3789546021367890',
      account: '0076543210987',
    },
    {
      id: '5',
      transType: 'Cash Deposit',
      hpan: '9876543210123456',
      account: '0054321098765',
    },
    {
      id: '6',
      transType: 'Mobile Transfer',
      hpan: '1234567890234567',
      account: '0023456789012',
    },
    {
      id: '7',
      transType: 'Bill Payment',
      hpan: '8765432109876543',
      account: '0043210987654',
    },
    {
      id: '8',
      transType: 'Contactless Payment',
      hpan: '2345678901567890',
      account: '0087654321098',
    },
    {
      id: '9',
      transType: 'Balance Inquiry',
      hpan: '3456789012345678',
      account: '0067890123456',
    },
    {
      id: '10',
      transType: 'Transfer to Friend',
      hpan: '7890123456789012',
      account: '0032109876543',
    },
  ];

  dummyActionType = [{ name: 'Add Transaction', code: '1' }];

  constructor(
    private action$: Actions,
    private fb: FormBuilder,
    private userService: UserService,
    private confirmService: ConfirmService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      actionType: ['', Validators.required],
      conditionTransfer: ['', Validators.required],
    });
    this.transactionForm = this.fb.group({
      transaction: ['', Validators.required],
    });

    this.userList$.pipe(takeUntil(this.destroyer$)).subscribe((data) => {
      if (data.length > 0) {
        this.userList = data.filter(
          (v1) => v1.username != this.userData.username
        );
      }
    });
  }

  ngOnDestroy() {
    this.form.reset();
    this.destroyer$.next(true);
    this.destroyer$.complete();
  }

  onDialogVisible() {
    this.isLoading.emit(true);
  }

  onClose() {
    this.form.reset();
    this.closeSelf.emit(false);
  }

  addTransactionDialog() {
    this.visibleTransactionAddDialog = true;
  }

  deleteTransaction() {
    this.confirmService.showDialogConfirm(() => {
      let existingDataIndex = this.transactionItems.findIndex(
        (v1) => v1.id == this.selectedTransaction?.id
      );
      this.transactionItems.splice(existingDataIndex, 1);
      this.selectedTransaction = undefined;
    });
  }

  onCloseTransactionDialog() {
    this.transactionForm.reset();
    this.visibleTransactionAddDialog = false;
  }

  onSave(value: any) {}

  onSaveTransaction(data: any) {
    console.log(data);
    this.transactionItems.push(data.transaction);
    console.log(this.transactionItems);
    this.onCloseTransactionDialog();
  }

  actionChecker(value: any) {
    this.getListField()?.setValue('');
    this.getUsernameField()?.setValue('');

    switch (value.value.code) {
      case '92':
        this.isLoading.emit(true);
        this.getUserList();
        break;

      case '93':
      case '70':
        this.isLoading.emit(true);
        this.getValueField()?.setValue(this.itemSelected?.hpan);
        break;

      case '94':
      case '71':
        this.isLoading.emit(true);
        this.getValueField()?.setValue(this.itemSelected?.acct1);
        break;

      case '95':
      case '72':
        this.isLoading.emit(true);
        this.getValueField()?.setValue(this.itemSelected?.merchant_type);
        break;

      case '96':
      case '73':
        this.isLoading.emit(true);
        this.getValueField()?.setValue(this.itemSelected?.terminal_id);
        break;

      case '82':
      case '86':
        this.getEntityTypeField()?.setValue('hpan');
        this.getValueField()?.setValue(this.itemSelected?.hpan);
        break;

      case '83':
      case '87':
        this.getEntityTypeField()?.setValue('acct1');
        this.getValueField()?.setValue(this.itemSelected?.acct1);
        break;

      case '84':
      case '88':
        this.getEntityTypeField()?.setValue('merchantType');
        this.getValueField()?.setValue(this.itemSelected?.merchant_type);
        break;

      case '85':
      case '89':
        this.getEntityTypeField()?.setValue('terminalId');
        this.getValueField()?.setValue(this.itemSelected?.terminal_id);
        break;

      default:
        this.getValueField()?.reset();
        break;
    }
  }
  getUserList() {
    this.userService.onGetUser();
  }

  isValueNotValidTransaction() {
    const stat = this.getTransactionField()?.hasError('required');

    return stat != undefined ? stat : true;
  }

  isValueNotValid() {
    const value = (this.form.getRawValue() as any)?.actionType;

    if (value != undefined) {
      if (value.code == '91') {
        const stat =
          this.getActionField()?.hasError('required') ||
          this.getCommentField()?.hasError('required');
        if (stat != undefined) {
          return stat;
        } else return true;
      }

      if (value.code == '92') {
        const stat =
          this.getActionField()?.hasError('required') ||
          this.getUsernameField()?.hasError('required');
        if (stat != undefined) {
          return stat;
        } else return true;
      }

      if (this.isActionList()) {
        const stat =
          this.getActionField()?.hasError('required') ||
          this.getListField()?.hasError('required') ||
          this.getValueField()?.getRawValue() == '';
        if (stat != undefined) {
          return stat;
        } else return true;
      }

      if (this.isWhiteBlackList()) {
        const stat =
          this.getValueField()?.getRawValue() == '' ||
          this.getEntityTypeField()?.hasError('required') ||
          this.getDateInField()?.hasError('required') ||
          this.getDateOutField()?.hasError('required') ||
          this.getUserGroupField()?.hasError('required');
        if (stat != undefined) {
          return stat;
        } else return true;
      }
    }

    const stat = this.getActionField()?.hasError('required');
    if (stat != undefined) return stat;
    return true;
  }

  isActionField(code: string) {
    const value = (this.form.getRawValue() as any)?.actionType?.code;
    return value == code;
  }

  isActionList() {
    return (
      this.isActionField('93') ||
      this.isActionField('94') ||
      this.isActionField('95') ||
      this.isActionField('96') ||
      this.isActionField('70') ||
      this.isActionField('71') ||
      this.isActionField('72') ||
      this.isActionField('73')
    );
  }

  isWhiteBlackList() {
    return (
      this.isActionField('82') ||
      this.isActionField('83') ||
      this.isActionField('84') ||
      this.isActionField('85') ||
      this.isActionField('86') ||
      this.isActionField('87') ||
      this.isActionField('88') ||
      this.isActionField('89')
    );
  }

  getTransactionField() {
    return this.transactionForm.get('transaction');
  }

  getActionField() {
    return this.form.get('actionType');
  }

  getCommentField() {
    return this.form.get('comment');
  }

  getUsernameField() {
    return this.form.get('username');
  }

  getListField() {
    return this.form.get('listId');
  }

  getValueField() {
    return this.form.get('value');
  }

  getEntityTypeField() {
    return this.form.get('entityType');
  }

  getDateInField() {
    return this.form.get('dateIn');
  }

  getDateOutField() {
    return this.form.get('dateOut');
  }

  getUserGroupField() {
    return this.form.get('userGroup');
  }
}
