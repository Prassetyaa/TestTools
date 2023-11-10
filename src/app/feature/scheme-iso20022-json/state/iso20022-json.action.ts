import { StateContext } from '@ngxs/store';
import { ConnectionSettingDomain } from '../../connection-setting/domain/connection-setting.domain';
import { MessageSettingDomain } from '../../message-setting/domain/message-setting.domain';
import { Iso20022JSONStateModel } from './iso20022-json.state';

export class Iso20022JSONGet {
  static readonly type = '[ISO20022 JSON] Get';
}

export class JSONConnectionSettingGet {
  static readonly type = '[ISO20022 JSON] Get';
}

export class JSONConnectionSettingAdd {
  static readonly type = '[ISO20022 JSON] Add Connection';
  constructor(public data: ConnectionSettingDomain) {}
}

export class JSONConnectionSettingUpdate {
  static readonly type = '[ISO20022 JSON] Update Connection';
  constructor(public data: ConnectionSettingDomain) {}
}

export class JSONConnectionSettingDelete {
  static readonly type = '[ISO20022 JSON] Edit Connection';
  constructor(public id: number) {}
}

export class JSONMessageSettingGet {
  static readonly type = '[ISO20022 JSON] Get';
}

export class JSONMessageSettingAdd {
  static readonly type = '[ISO20022 JSON] Add Message';
  constructor(public data: MessageSettingDomain) {}
}

export class JSONMessageSettingUpdate {
  static readonly type = '[ISO20022 JSON] Update Message';
  constructor(public data: MessageSettingDomain) {}
}

export class JSONMessageSettingDelete {
  static readonly type = '[ISO20022 JSON] Delete Message';
  constructor(public id: number) {}
}

export class ISO20022JSONGetAllInformation {
  static readonly type = '[ISO20022 JSON] GetAllInformation';

  constructor(
    public action: (ctx: StateContext<Iso20022JSONStateModel>) => void
  ) {}
}

export class ISO20022JSONResetAllInformation {
    static readonly type = '[ISO20022 JSON] ResetAllInformation';
  
    constructor(
      public action: (ctx: StateContext<Iso20022JSONStateModel>) => void
    ) {}
  }
  