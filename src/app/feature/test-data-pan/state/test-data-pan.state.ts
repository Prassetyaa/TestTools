import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TestDataPanDomain } from '../domain/test-data-pan.domain';
import { Injectable } from '@angular/core';
import {
  TestDataPanAdd,
  TestDataPanDelete,
  TestDataPanGet,
  TestDataPanUpdate,
} from './test-data-pan.action';
import { TestDataPanService } from '../service/test-data-pan.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { tap } from 'rxjs';

export class TestDataPanStateModel {
  data: TestDataPanDomain[] = [];
}

@State<TestDataPanStateModel>({
  name: 'PanManagement',
  defaults: {
    data: [],
  },
})
@Injectable()
export class TestDataPanState {
  constructor(
    private panService: TestDataPanService,
    private notificationService: NotificationService
  ) {}
  @Selector()
  static data(state: TestDataPanStateModel) {
    return state.data;
  }

  @Action(TestDataPanGet, { cancelUncompleted: true }) getData(
    ctx: StateContext<TestDataPanStateModel>
  ) {
    return this.panService.fetchAllPanManagement().pipe(
      tap(
        (response) => {
          ctx.setState({
            ...ctx.getState(),
            data: response.responseData,
          });
        },
        (error) => {
          if (error.status != 401)
            this.notificationService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(TestDataPanAdd, { cancelUncompleted: true }) addData(
    ctx: StateContext<TestDataPanStateModel>,
    { payload }: TestDataPanAdd
  ) {
    return this.panService.addPanManagement(payload).pipe(
      tap(
        (response) => {
          this.notificationService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error.status != 401)
            this.notificationService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(TestDataPanUpdate, { cancelUncompleted: true }) updateData(
    ctx: StateContext<TestDataPanStateModel>,
    { payload }: TestDataPanUpdate
  ) {
    return this.panService.updatePanManagement(payload).pipe(
      tap(
        (response) => {
          this.notificationService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error.status != 401)
            this.notificationService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(TestDataPanDelete, { cancelUncompleted: true }) deleteData(
    ctx: StateContext<TestDataPanStateModel>,
    { id }: TestDataPanDelete
  ) {
    return this.panService.deletePanManagement(id).pipe(
      tap(
        (response) => {
          this.notificationService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error.status != 401)
            this.notificationService.errorHttpNotification(error);
        }
      )
    );
  }
}
