import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  TestDataPanAdd,
  TestDataPanDelete,
  TestDataPanGet,
  TestDataPanUpdate,
} from './test-data-pan.action';
import { TestDataPanDomain } from '../domain/test-data-pan.domain';

@Injectable({
  providedIn: 'root',
})
export class TestDataPanDispatcher {
  @Dispatch()
  public TestDataPanGetDispatch() {
    return new TestDataPanGet();
  }

  @Dispatch()
  public TestDataPanAddDispatch(payload: TestDataPanDomain) {
    return new TestDataPanAdd(payload);
  }

  @Dispatch()
  public TestDataUpdateDispatch(payload: TestDataPanDomain) {
    return new TestDataPanUpdate(payload);
  }

  @Dispatch()
  public TestDataDeleteDispatch(id: number) {
    return new TestDataPanDelete(id);
  }
}
