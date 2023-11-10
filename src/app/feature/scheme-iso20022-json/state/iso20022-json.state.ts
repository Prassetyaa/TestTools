import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ConnectionSettingDomain } from '../../connection-setting/domain/connection-setting.domain';
import { MessageSettingDomain } from '../../message-setting/domain/message-setting.domain';
import { SchemeIso20022JsonDomain } from '../domain/scheme-iso20022-json.domain';
import { Injectable } from '@angular/core';
import {
  ISO20022JSONGetAllInformation,
  ISO20022JSONResetAllInformation,
  Iso20022JSONGet,
  JSONConnectionSettingAdd,
  JSONConnectionSettingDelete,
  JSONConnectionSettingGet,
  JSONConnectionSettingUpdate,
  JSONMessageSettingAdd,
  JSONMessageSettingDelete,
  JSONMessageSettingGet,
  JSONMessageSettingUpdate,
} from './iso20022-json.action';
import { SchemeIso20022JsonService } from '../service/scheme-iso20022-json.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { tap } from 'rxjs';

export class Iso20022JSONStateModel {
  data: SchemeIso20022JsonDomain[] = [];
  messages: MessageSettingDomain[] = [];
  connections: ConnectionSettingDomain[] = [];
}

@State<Iso20022JSONStateModel>({
  name: 'ISO20022Json',
  defaults: {
    data: [],
    connections: [],
    messages: [],
  },
})
@Injectable()
export class Iso20022JsonState {
  @Selector()
  static data(state: Iso20022JSONStateModel) {
    return state.data;
  }

  @Selector()
  static messages(state: Iso20022JSONStateModel) {
    return state.messages;
  }

  @Selector()
  static connections(state: Iso20022JSONStateModel) {
    return state.connections;
  }

  constructor(
    private jsonService: SchemeIso20022JsonService,
    private notifService: NotificationService
  ) {}

  @Action(Iso20022JSONGet, { cancelUncompleted: true }) getIso20022JsonData(
    ctx: StateContext<Iso20022JSONStateModel>
  ) {
    return this.jsonService.fetchIso20022Json().pipe(
      tap(
        (response) => {
          ctx.setState({
            ...ctx.getState(),
            data: response.responseData,
          });
        },
        (error) => {
          if (error != 401) this.notifService.errorHttpNotification(error);
        }
      )
    );
  }

  //   Connection Setting
  @Action(JSONConnectionSettingGet, { cancelUncompleted: true })
  getConnnectionData(ctx: StateContext<Iso20022JSONStateModel>) {
    return this.jsonService.fetchConnection().pipe(
      tap(
        (response) => {
          ctx.setState({
            ...ctx.getState(),
            data: response.responseData,
          });
        },
        (error) => {
          if (error != 401) this.notifService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(JSONConnectionSettingAdd, { cancelUncompleted: true })
  addConnectionData(
    ctx: StateContext<Iso20022JSONStateModel>,
    { data }: JSONConnectionSettingAdd
  ) {
    return this.jsonService.addConnection(data).pipe(
      tap(
        (response) => {
          this.notifService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error != 401) this.notifService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(JSONConnectionSettingUpdate, { cancelUncompleted: true })
  updateConnectionData(
    ctx: StateContext<Iso20022JSONStateModel>,
    { data }: JSONConnectionSettingUpdate
  ) {
    return this.jsonService.updateConnection(data).pipe(
      tap(
        (response) => {
          this.notifService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error != 401) this.notifService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(JSONConnectionSettingDelete, { cancelUncompleted: true })
  deleteConnectionData(
    ctx: StateContext<Iso20022JSONStateModel>,
    { id }: JSONConnectionSettingDelete
  ) {
    return this.jsonService.deleteConnection(id).pipe(
      tap(
        (response) => {
          this.notifService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error != 401) this.notifService.errorHttpNotification(error);
        }
      )
    );
  }

  //   Message Setting

  @Action(JSONMessageSettingGet, { cancelUncompleted: true }) getMessage(
    ctx: StateContext<Iso20022JSONStateModel>
  ) {
    return this.jsonService.fetchMessage().pipe(
      tap(
        (response) => {
          ctx.setState({
            ...ctx.getState(),
            data: response.responseData,
          });
        },
        (error) => {
          if (error != 401) this.notifService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(JSONMessageSettingAdd, { cancelUncompleted: true })
  addMessageData(
    ctx: StateContext<Iso20022JSONStateModel>,
    { data }: JSONMessageSettingAdd
  ) {
    return this.jsonService.addFieldMessage(data).pipe(
      tap(
        (response) => {
          this.notifService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error != 401) this.notifService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(JSONMessageSettingUpdate, { cancelUncompleted: true })
  updateMessageData(
    ctx: StateContext<Iso20022JSONStateModel>,
    { data }: JSONMessageSettingUpdate
  ) {
    return this.jsonService.addFieldMessage(data).pipe(
      tap(
        (response) => {
          this.notifService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error != 401) this.notifService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(JSONMessageSettingDelete, { cancelUncompleted: true })
  deleteMessageData(
    ctx: StateContext<Iso20022JSONStateModel>,
    { id }: JSONMessageSettingDelete
  ) {
    return this.jsonService.deleteFieldMessage(id).pipe(
      tap(
        (response) => {
          this.notifService.successNotification(
            response.responseReason,
            response.responseMessage
          );
        },
        (error) => {
          if (error != 401) this.notifService.errorHttpNotification(error);
        }
      )
    );
  }

  @Action(ISO20022JSONGetAllInformation, { cancelUncompleted: true })
  getAllInformation(
    ctx: StateContext<Iso20022JSONStateModel>,
    { action }: ISO20022JSONGetAllInformation
  ) {
    action(ctx);
  }

  @Action(ISO20022JSONResetAllInformation, { cancelUncompleted: true })
  resetAllInformation(
    ctx: StateContext<Iso20022JSONStateModel>,
    { action }: ISO20022JSONResetAllInformation
  ) {
    action(ctx);
  }
}
