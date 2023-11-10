import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
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
import { MessageSettingDomain } from '../../message-setting/domain/message-setting.domain';
import { ConnectionSettingDomain } from '../../connection-setting/domain/connection-setting.domain';
import { StateContext } from '@ngxs/store';
import { Iso20022JSONStateModel } from './iso20022-json.state';

@Injectable({
  providedIn: 'root',
})
export class Iso20022JsonDispatcher {
  @Dispatch()
  public ISO20022JSONGetDispatch() {
    return new Iso20022JSONGet();
  }

  //   Connection Setting

  @Dispatch()
  public JSONConnectionGetDispatch() {
    return new JSONConnectionSettingGet();
  }

  @Dispatch()
  public JSONConnectionAddDispatch(data: ConnectionSettingDomain) {
    return new JSONConnectionSettingAdd(data);
  }

  @Dispatch()
  public JSONConnectionUpdateDispatch(data: ConnectionSettingDomain) {
    return new JSONConnectionSettingUpdate(data);
  }

  @Dispatch()
  public JSONConnectionDeleteDispatch(id: number) {
    return new JSONConnectionSettingDelete(id);
  }

  // Message Setting
  @Dispatch()
  public JSONMessageGetDispatch() {
    return new JSONMessageSettingGet();
  }

  @Dispatch()
  public JSONMessageAddDispatch(data: MessageSettingDomain) {
    return new JSONMessageSettingAdd(data);
  }

  @Dispatch()
  public JSONMessageUpdateDispatch(data: MessageSettingDomain) {
    return new JSONMessageSettingUpdate(data);
  }

  @Dispatch()
  public JSONMessageDeleteDispatch(id: number) {
    return new JSONMessageSettingDelete(id);
  }

  @Dispatch()
  public ISO20022JSONGetAllInformation(action: (ctx: StateContext<Iso20022JSONStateModel>) => void) {
    return new ISO20022JSONGetAllInformation(action)
  }

  @Dispatch()
  public ISO20022JSONResetAllInformation(action: (ctx: StateContext<Iso20022JSONStateModel>) => void) {
    return new ISO20022JSONResetAllInformation(action)
  }
}
