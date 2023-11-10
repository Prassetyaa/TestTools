import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomHttpResponse } from 'src/app/shared/domain/customHttpResponse';
import { environment } from 'src/environments/environment';
import { TestDataMerchantDomain } from '../domain/test-data-merchant.domain';
import { TestDataMerchantDispatcher } from '../state/test-data-merchant.dispatcher';

@Injectable({
  providedIn: 'root',
})
export class TestDataMerchantService {
  private apiUrl = environment.dev_env;
  constructor(private http: HttpClient, private merchantDispatcher: TestDataMerchantDispatcher) {}

  fetchAllMerchant() {
    return this.http.get<CustomHttpResponse<TestDataMerchantDomain[]>>(
      `${this.apiUrl}/merchant/list`
    );
  }

  addMerchant(payload: TestDataMerchantDomain) {
    return this.http.post<CustomHttpResponse<any>>(
      `${this.apiUrl}/merchant/create`,
      payload
    );
  }

  updateMerchant(payload: TestDataMerchantDomain) {
    return this.http.post<CustomHttpResponse<any>>(
      `${this.apiUrl}`,
      payload
    );
  }

  deleteMerchant(id: number) {
    return this.http.delete<CustomHttpResponse<any>>(
      `${this.apiUrl}/` + id
    );
  }

// dispatcher

  onFetchMerchantDispatch() {
    this.merchantDispatcher.TestDataMerchantGetDispatch();
  }

  onAddMerchantDispatch(payload: TestDataMerchantDomain) {
    this.merchantDispatcher.TestDataMerchantAddDispatch(payload)
  }

  onUpdateMerchantDispatch(payload: TestDataMerchantDomain) {
    this.merchantDispatcher.TestDataMerchantUpdateDispatch(payload)
  }

  onDeleteMerchantDispatch(id: number) {
    this.merchantDispatcher.TestDataMerchantDeleteDispatch(id)
  }

}
