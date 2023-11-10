import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  TestDataTerminalAdd,
  TestDataTerminalDelete,
  TestDataTerminalGet,
  TestDataTerminalUpdate,
} from './test-data-terminal.action';
import { TestDataTerminalDomain } from '../domain/test-data-terminal.domain';

@Injectable({
  providedIn: 'root',
})
export class TestDataTerminalDispatcher {
  @Dispatch()
  public TestDataTerminalGetDispatch() {
    return new TestDataTerminalGet();
  }

  @Dispatch()
  public TestDataTerminalAddDispatch(payload: TestDataTerminalDomain) {
    return new TestDataTerminalAdd(payload);
  }

  @Dispatch()
  public TestDataTerminalUpdateDispatch(payload: TestDataTerminalDomain) {
    return new TestDataTerminalUpdate(payload)
  }

  @Dispatch()
  public TestDataTerminalDeleteDispatch(id: number) {
    return new TestDataTerminalDelete(id)
  }
}
