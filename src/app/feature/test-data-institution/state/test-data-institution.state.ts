import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TestDataInstitutionDomain } from '../domain/test-data-institution';
import { Injectable } from '@angular/core';
import { TestDataInstitutionService } from '../service/test-data-institution.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import {
  TestDataInstitutionAdd,
  TestDataInstitutionDelete,
  TestDataInstitutionGet,
  TestDataInstitutionUpdate,
} from './test-data-institution.action';
import { tap } from 'rxjs';

export class TestDataInstitutionStateModel {
  data: TestDataInstitutionDomain[] = []
}

@State<TestDataInstitutionStateModel>({
  name: 'InstitutionManagement',
  defaults: {
    data: [],
  },
})
@Injectable()
export class TestDataInstitutionState {
  constructor(
    private insitutionService: TestDataInstitutionService,
    private notifService: NotificationService
  ) {}

  @Selector()
  static data(state: TestDataInstitutionStateModel) {
    return state.data;
  }

  @Action(TestDataInstitutionGet, { cancelUncompleted: true }) getData(
    ctx: StateContext<TestDataInstitutionStateModel>
  ) {
    return this.insitutionService.fetchAllInstitutions().pipe(
      tap(
        (response) => {
          ctx.setState({
            ...ctx.getState(),
            data: response.responseData,
          });
        },
        (error) => {
          if (error.status != 401)
            this.notifService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(TestDataInstitutionAdd, { cancelUncompleted: true }) addData(
    ctx: StateContext<TestDataInstitutionStateModel>,
    { payload }: TestDataInstitutionAdd
  ) {
    return this.insitutionService.addInsitution(payload).pipe(
      tap(
        (response) => {
          this.notifService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error.status != 401)
            this.notifService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(TestDataInstitutionUpdate, { cancelUncompleted: true }) updateData(
    ctx: StateContext<TestDataInstitutionStateModel>,
    { payload }: TestDataInstitutionUpdate
  ) {
    return this.insitutionService.updateInsitution(payload).pipe(
      tap(
        (response) => {
          this.notifService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error.status != 401)
            this.notifService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(TestDataInstitutionDelete, { cancelUncompleted: true }) deleteData(
    ctx: StateContext<TestDataInstitutionStateModel>,
    { id }: TestDataInstitutionDelete
  ) {
    return this.insitutionService.deleteInsitution(id).pipe(
      tap(
        (response) => {
          this.notifService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error.status != 401)
            this.notifService.errorHttpNotification(error);
        }
      )
    );
  }
}
