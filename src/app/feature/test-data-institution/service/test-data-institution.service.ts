import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TestDataInstitutionDomain } from '../domain/test-data-institution';
import { CustomHttpResponse } from 'src/app/shared/domain/customHttpResponse';
import { TestDataInstitutionDispatcher } from '../state/test-data-institution.dispatcher';

@Injectable({
  providedIn: 'root',
})
export class TestDataInstitutionService {
  private apiUrl = environment.dev_env;

  constructor(private http: HttpClient, private insitutionDispatcher: TestDataInstitutionDispatcher) {}

  fetchAllInstitutions() {
    return this.http.get<CustomHttpResponse<TestDataInstitutionDomain[]>>(
      `${this.apiUrl}/institution/list`
    );
  }

  addInsitution(payload: TestDataInstitutionDomain) {
    return this.http.post<CustomHttpResponse<any>>(`${this.apiUrl}/institution/create`, payload);
  }

  updateInsitution(payload: TestDataInstitutionDomain) {
    return this.http.post<CustomHttpResponse<any>>(`${this.apiUrl}`, payload);
  }

  deleteInsitution(id: number) {
    return this.http.delete<CustomHttpResponse<any>>(`${this.apiUrl}/` + id);
  }

// dispacther

  onGetInstitutionManagement() {
    this.insitutionDispatcher.TestDataInstitutionGetDispatch();
  }

  onAddInstitutionManagement(payload: TestDataInstitutionDomain) {
    this.insitutionDispatcher.TestDataInstitutionAddDispatch(payload)
  }

  onUpdateInsitutionManagement(payload: TestDataInstitutionDomain) {
    this.insitutionDispatcher.TestDataInstitutionUpdateDispatch(payload)
  }

  onDeleteInstitutionManagement(id: number) {
    this.insitutionDispatcher.TestDataInstitutionDeleteDispatch(id)
  }
}
