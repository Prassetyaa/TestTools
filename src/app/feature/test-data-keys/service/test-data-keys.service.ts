import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomHttpResponse } from 'src/app/shared/domain/customHttpResponse';
import { environment } from 'src/environments/environment';
import { TestDataKeysDomain } from '../domain/test-data-keys.domain';
import { TestDataKeysDispatcher } from '../state/test-data-keys.dispatcher';

@Injectable({
  providedIn: 'root'
})
export class TestDataKeysService {
  private apiUrl = environment.dev_env;
  constructor(private http: HttpClient, private keyDispatcher: TestDataKeysDispatcher) { }

  fetchAllKeyManagement() {
    return this.http.get<CustomHttpResponse<TestDataKeysDomain[]>>(`${this.apiUrl}/keys/list`)
  }

  addKeyManagement(payload: TestDataKeysDomain) {
    return this.http.post<CustomHttpResponse<any>>(`${this.apiUrl}/keys/create`, payload)
  }

  updateKeyManagement(payload: TestDataKeysDomain) {
    return this.http.post<CustomHttpResponse<any>>(`${this.apiUrl}`, payload)
  }

  deleteKeyManagement(id: number) {
    return this.http.delete<CustomHttpResponse<any>>(`${this.apiUrl}/` + id)
  }

// dispatcher

  onFetchKeysDispatch() {
    this.keyDispatcher.TestDataKeyGetDispatch();
  }

  onAddKeyDispatch(payload: TestDataKeysDomain) {
    this.keyDispatcher.TestDataKeysAddDispatch(payload)
  }

  onUpdateKeyDispatch(payload: TestDataKeysDomain) {
    this.keyDispatcher.TestDataKeysUpdateDispatch(payload)
  }

  onDeleteKeyDispatch(id: number) {
    this.keyDispatcher.TestDataKeysDeleteDispatch(id)
  }
}
