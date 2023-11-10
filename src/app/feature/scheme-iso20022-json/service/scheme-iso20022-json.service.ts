import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConnectionSettingDomain } from '../../connection-setting/domain/connection-setting.domain';
import { CustomHttpResponse } from 'src/app/shared/domain/customHttpResponse';
import { MessageSettingDomain } from '../../message-setting/domain/message-setting.domain';
import { Iso20022JSONStateModel } from '../state/iso20022-json.state';
import { Iso20022JsonDispatcher } from '../state/iso20022-json.dispatcher';
import { StateContext } from '@ngxs/store';

@Injectable({
  providedIn: 'root',
})
export class SchemeIso20022JsonService {
  private apiUrl = environment.dev_env;

  constructor(
    private http: HttpClient,
    private iso20022JSONDispatcher: Iso20022JsonDispatcher
  ) {}

  fetchIso20022Json() {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // Connection Setting

  fetchConnection() {
    return this.http.get<any>(`assets/connection.json`);
  }

  addConnection(data: ConnectionSettingDomain) {
    return this.http.post<CustomHttpResponse<any>>(`${this.apiUrl}`, data);
  }

  updateConnection(data: ConnectionSettingDomain) {
    return this.http.post<CustomHttpResponse<any>>(`${this.apiUrl}`, data);
  }

  deleteConnection(id: number) {
    return this.http.delete<CustomHttpResponse<any>>(`${this.apiUrl}/` + id);
  }

  // Message Setting

  fetchMessage() {
    return this.http.get<any>('');
  }

  fetchFieldMessage(id: number) {
    return this.http.get<any>(`${this.apiUrl}/` + id);
  }

  addFieldMessage(data: MessageSettingDomain) {
    return this.http.post<CustomHttpResponse<any>>(`${this.apiUrl}`, data);
  }

  updateFieldMessage(data: MessageSettingDomain) {
    return this.http.post<CustomHttpResponse<any>>(`${this.apiUrl}`, data);
  }

  deleteFieldMessage(id: number) {
    return this.http.delete<CustomHttpResponse<any>>(`${this.apiUrl}/` + id);
  }

  onGetAllInformation(
    action: (ctx: StateContext<Iso20022JSONStateModel>) => void
  ) {
    this.iso20022JSONDispatcher.ISO20022JSONGetAllInformation(action);
  }

  onResetAllInformation(
    action: (ctx: StateContext<Iso20022JSONStateModel>) => void
  ) {
    this.iso20022JSONDispatcher.ISO20022JSONResetAllInformation(action);
  }
}
