import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TestDataQrCodeDomain } from '../domain/test-data-qr-code.domain';
import { Injectable } from '@angular/core';
import { TestDataQrCodeService } from '../service/test-data-qr-code.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import {
  TestDataQrCodeAdd,
  TestDataQrCodeDelete,
  TestDataQrCodeGet,
  TestDataQrCodeUpdate,
} from './test-data-qr-code.action';
import { tap } from 'rxjs';

export class TestDataQrCodeStateModel {
  data: TestDataQrCodeDomain[] = [];
}

@State<TestDataQrCodeStateModel>({
  name: 'QrCodeState',
  defaults: {
    data: [],
  },
})
@Injectable()
export class TestDataQrCodeState {
  constructor(
    private qrCodeService: TestDataQrCodeService,
    private notificationService: NotificationService
  ) {}

  @Selector()
  static data(state: TestDataQrCodeStateModel) {
    return state.data;
  }

  @Action(TestDataQrCodeGet, { cancelUncompleted: true }) getData(
    ctx: StateContext<TestDataQrCodeStateModel>
  ) {
    return this.qrCodeService.fetchAllQRCode().pipe(
      tap(
        (response) => {
          ctx.setState({
            ...ctx.getState(),
            data: response.responseData,
          });
        },
        (error) => {
          if (error != 401) {
            this.notificationService.errorHttpNotification(error);
          }
        }
      )
    );
  }

  @Action(TestDataQrCodeAdd, { cancelUncompleted: true }) addData(
    ctx: StateContext<TestDataQrCodeStateModel>,
    { data }: TestDataQrCodeAdd
  ) {
    return this.qrCodeService.addQRCode(data).pipe(
      tap(
        (response) => {
          this.notificationService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error != 401) {
            this.notificationService.errorHttpNotification(error);
          }
        }
      )
    );
  }

  @Action(TestDataQrCodeUpdate, { cancelUncompleted: true }) updateData(
    ctx: StateContext<TestDataQrCodeStateModel>,
    { data }: TestDataQrCodeUpdate
  ) {
    return this.qrCodeService.updateQRCode(data).pipe(
      tap(
        (response) => {
          this.notificationService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error != 401) {
            this.notificationService.errorHttpNotification(error);
          }
        }
      )
    );
  }

  @Action(TestDataQrCodeDelete, { cancelUncompleted: true }) deleteData(
    ctx: StateContext<TestDataQrCodeStateModel>,
    { id }: TestDataQrCodeDelete
  ) {
    return this.qrCodeService.deleteQRCode(id).pipe(
      tap(
        (response) => {
          this.notificationService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error != 401) {
            this.notificationService.errorHttpNotification(error);
          }
        }
      )
    );
  }
}
