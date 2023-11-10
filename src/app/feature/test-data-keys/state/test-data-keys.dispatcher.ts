import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  TestDataKeysAdd,
  TestDataKeysDelete,
  TestDataKeysGet,
  TestDataKeysUpdate,
} from './test-data-keys.action';
import { TestDataKeysDomain } from '../domain/test-data-keys.domain';

@Injectable({
  providedIn: 'root',
})
export class TestDataKeysDispatcher {
  @Dispatch()
  public TestDataKeyGetDispatch() {
    return new TestDataKeysGet();
  }

  @Dispatch()
  public TestDataKeysAddDispatch(payload: TestDataKeysDomain) {
    return new TestDataKeysAdd(payload);
  }

  @Dispatch()
  public TestDataKeysUpdateDispatch(payload: TestDataKeysDomain) {
    return new TestDataKeysUpdate(payload);
  }

  @Dispatch()
  public TestDataKeysDeleteDispatch(id: number) {
    return new TestDataKeysDelete(id);
  }
}
