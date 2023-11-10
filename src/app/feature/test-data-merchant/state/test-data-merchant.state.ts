import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TestDataMerchantDomain } from '../domain/test-data-merchant.domain';
import { Injectable } from '@angular/core';
import { TestDataMerchantService } from '../service/test-data-merchant.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import {
  TestDataMerchantAdd,
  TestDataMerchantDelete,
  TestDataMerchantGet,
  TestDataMerchantUpdate,
} from './test-data-merchant.action';
import { tap } from 'rxjs';

export class TestDataMerchantStateModel {
  data: TestDataMerchantDomain[] = [];
}

@State<TestDataMerchantStateModel>({
  name: 'merchantManagement',
  defaults: {
    data: [],
  },
})
@Injectable()
export class TestDataMerchantState {
  constructor(
    private merchantService: TestDataMerchantService,
    private notificationService: NotificationService
  ) {}

  @Selector()
  static data(state: TestDataMerchantStateModel) {
    return state.data;
  }

  @Action(TestDataMerchantGet, { cancelUncompleted: true }) getData(
    ctx: StateContext<TestDataMerchantStateModel>
  ) {
    return this.merchantService.fetchAllMerchant().pipe(
      tap(
        (response) => {
          ctx.setState({
            ...ctx.getState(),
            data: response.responseData,
          });
        },
        (error) => {
          if (error != 401)
            this.notificationService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(TestDataMerchantAdd, { cancelUncompleted: true }) addData(
    ctx: StateContext<TestDataMerchantStateModel>,
    { payload }: TestDataMerchantAdd
  ) {
    return this.merchantService.addMerchant(payload).pipe(
      tap(
        (response) => {
          this.notificationService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error != 401)
            this.notificationService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(TestDataMerchantUpdate, { cancelUncompleted: true }) updateData(
    ctx: StateContext<TestDataMerchantStateModel>,
    { payload }: TestDataMerchantUpdate
  ) {
    return this.merchantService.updateMerchant(payload).pipe(
      tap(
        (response) => {
          this.notificationService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error != 401)
            this.notificationService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(TestDataMerchantDelete, { cancelUncompleted: true }) deleteData(
    ctx: StateContext<TestDataMerchantStateModel>,
    { id }: TestDataMerchantDelete
  ) {
    return this.merchantService.deleteMerchant(id).pipe(
      tap(
        (response) => {
          this.notificationService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error != 401)
            this.notificationService.errorHttpNotification(error);
        }
      )
    );
  }
}
