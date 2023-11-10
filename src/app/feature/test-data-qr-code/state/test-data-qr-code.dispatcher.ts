import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  TestDataQrCodeAdd,
  TestDataQrCodeDelete,
  TestDataQrCodeGet,
  TestDataQrCodeUpdate,
} from './test-data-qr-code.action';
import { TestDataQrCodeDomain } from '../domain/test-data-qr-code.domain';

@Injectable({
  providedIn: 'root',
})
export class TestDataQrCodeDispatcher {
  @Dispatch()
  public TestDataQrCodeGetDispatch() {
    return new TestDataQrCodeGet();
  }

  @Dispatch()
  public TestDataQrCodeAddDispatch(data: TestDataQrCodeDomain) {
    return new TestDataQrCodeAdd(data);
  }

  @Dispatch()
  public TestDataQrCodeUpdateDispatch(data: TestDataQrCodeDomain) {
    return new TestDataQrCodeUpdate(data)
  }

  @Dispatch()
  public TestDataQrCodeDeleteDispatch(id: number) {
    return new TestDataQrCodeDelete(id)
  }
}
