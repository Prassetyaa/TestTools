import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  TestDataInstitutionAdd,
  TestDataInstitutionDelete,
  TestDataInstitutionGet,
  TestDataInstitutionUpdate,
} from './test-data-institution.action';
import { TestDataInstitutionDomain } from '../domain/test-data-institution';

@Injectable({
  providedIn: 'root',
})
export class TestDataInstitutionDispatcher {
  @Dispatch()
  public TestDataInstitutionGetDispatch() {
    return new TestDataInstitutionGet();
  }

  @Dispatch()
  public TestDataInstitutionAddDispatch(payload: TestDataInstitutionDomain) {
    return new TestDataInstitutionAdd(payload);
  }

  @Dispatch()
  public TestDataInstitutionUpdateDispatch(payload: TestDataInstitutionDomain) {
    return new TestDataInstitutionUpdate(payload);
  }

  @Dispatch()
  public TestDataInstitutionDeleteDispatch(id: number) {
    return new TestDataInstitutionDelete(id);
  }
}
