import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  TestDataMerchantAdd,
  TestDataMerchantDelete,
  TestDataMerchantGet,
  TestDataMerchantUpdate,
} from './test-data-merchant.action';
import { TestDataMerchantDomain } from '../domain/test-data-merchant.domain';

@Injectable({
  providedIn: 'root',
})
export class TestDataMerchantDispatcher {
  @Dispatch()
  public TestDataMerchantGetDispatch() {
    return new TestDataMerchantGet();
  }

  @Dispatch()
  public TestDataMerchantAddDispatch(payload: TestDataMerchantDomain) {
    return new TestDataMerchantAdd(payload);
  }

  @Dispatch()
  public TestDataMerchantUpdateDispatch(payload: TestDataMerchantDomain) {
    return new TestDataMerchantUpdate(payload);
  }

  @Dispatch()
  public TestDataMerchantDeleteDispatch(id: number) {
    return new TestDataMerchantDelete(id);
  }
}
