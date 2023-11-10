import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomHttpResponse } from 'src/app/shared/domain/customHttpResponse';
import { environment } from 'src/environments/environment';
import { TestDataPanDomain } from '../domain/test-data-pan.domain';
import { TestDataPanDispatcher } from '../state/test-data-pan.dispatcher';

@Injectable({
  providedIn: 'root'
})
export class TestDataPanService {
  private apiUrl = environment.dev_env;
  constructor(private http: HttpClient, private panDispatcher: TestDataPanDispatcher) { }

  fetchAllPanManagement() {
    return this.http.get<CustomHttpResponse<TestDataPanDomain[]>>(`${this.apiUrl}/pan/list`);
  }

  addPanManagement(payload: TestDataPanDomain) {
    return this.http.post<CustomHttpResponse<any>>(`${this.apiUrl}/pan/create`, payload);
  }

  updatePanManagement(payload: TestDataPanDomain) {
    return this.http.post<CustomHttpResponse<any>>(`${this.apiUrl}`, payload)
  }

  deletePanManagement(id: number) {
    return this.http.delete<CustomHttpResponse<any>>(`${this.apiUrl}/` + id)
  }


  //dispatcher

  onFetchAllPan() {
    this.panDispatcher.TestDataPanGetDispatch();
  }

  onAddPan(payload: TestDataPanDomain) {
    this.panDispatcher.TestDataPanAddDispatch(payload);
  }

  onUpdatePan(payload: TestDataPanDomain) {
    this.panDispatcher.TestDataUpdateDispatch(payload)
  }

  onDeletePan(id: number) {
    this.panDispatcher.TestDataDeleteDispatch(id)
  }
}
