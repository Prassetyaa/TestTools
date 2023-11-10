import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TestDataTerminalDomain } from '../domain/test-data-terminal.domain';
import { Injectable } from '@angular/core';
import { TestDataTerminalService } from '../service/test-data-terminal.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import {
  TestDataTerminalAdd,
  TestDataTerminalDelete,
  TestDataTerminalGet,
  TestDataTerminalUpdate,
} from './test-data-terminal.action';
import { tap } from 'rxjs';

export class TestDataTerminalStateModel {
  data: TestDataTerminalDomain[] = [];
}

@State<TestDataTerminalStateModel>({
  name: 'terminalManagement',
  defaults: {
    data: [],
  },
})
@Injectable()
export class TestDataTerminalState {
  constructor(
    private terminalService: TestDataTerminalService,
    private notificationService: NotificationService
  ) {}

  @Selector()
  static data(state: TestDataTerminalStateModel) {
    return state.data;
  }

  @Action(TestDataTerminalGet, { cancelUncompleted: true }) getData(
    ctx: StateContext<TestDataTerminalStateModel>
  ) {
    return this.terminalService.fetchAllTerminal().pipe(
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

  @Action(TestDataTerminalAdd, { cancelUncompleted: true }) addData(
    ctx: StateContext<TestDataTerminalStateModel>,
    { payload }: TestDataTerminalAdd
  ) {
    return this.terminalService.addTerminal(payload).pipe(
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

  @Action(TestDataTerminalUpdate, { cancelUncompleted: true }) updateData(
    ctx: StateContext<TestDataTerminalStateModel>,
    { payload }: TestDataTerminalUpdate
  ) {
    return this.terminalService.updateTerminal(payload).pipe(
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

  @Action(TestDataTerminalDelete, { cancelUncompleted: true }) deleteData(
    ctx: StateContext<TestDataTerminalStateModel>,
    { id }: TestDataTerminalDelete
  ) {
    return this.terminalService.deleteTerminal(id).pipe(
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
