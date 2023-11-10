import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TestDataKeysDomain } from '../domain/test-data-keys.domain';
import { Injectable } from '@angular/core';
import { TestDataKeysService } from '../service/test-data-keys.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import {
  TestDataKeysAdd,
  TestDataKeysDelete,
  TestDataKeysGet,
  TestDataKeysUpdate,
} from './test-data-keys.action';
import { tap } from 'rxjs';

export class TestDataKeysStateModel {
  data: TestDataKeysDomain[] = [];
}

@State<TestDataKeysStateModel>({
  name: 'KeyManagement',
  defaults: {
    data: [],
  },
})
@Injectable()
export class TestDataKeysState {
  constructor(
    private keyService: TestDataKeysService,
    private notificationService: NotificationService
  ) {}

  @Selector()
  static data(state: TestDataKeysStateModel) {
    return state.data;
  }

  @Action(TestDataKeysGet, { cancelUncompleted: true }) getData(
    ctx: StateContext<TestDataKeysStateModel>
  ) {
    return this.keyService.fetchAllKeyManagement().pipe(
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

  @Action(TestDataKeysAdd, { cancelUncompleted: true }) addData(
    ctx: StateContext<TestDataKeysStateModel>,
    { payload }: TestDataKeysAdd
  ) {
    return this.keyService.addKeyManagement(payload).pipe(
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

  @Action(TestDataKeysUpdate, { cancelUncompleted: true }) updateData(
    ctx: StateContext<TestDataKeysStateModel>,
    { payload }: TestDataKeysUpdate
  ) {
    return this.keyService.updateKeyManagement(payload).pipe(
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

  @Action(TestDataKeysDelete, { cancelUncompleted: true }) deleteData(
    ctx: StateContext<TestDataKeysStateModel>,
    { id }: TestDataKeysDelete
  ) {
    return this.keyService.deleteKeyManagement(id).pipe(
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
