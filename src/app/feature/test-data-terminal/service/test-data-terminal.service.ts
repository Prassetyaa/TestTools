import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomHttpResponse } from 'src/app/shared/domain/customHttpResponse';
import { environment } from 'src/environments/environment';
import { TestDataTerminalDomain } from '../domain/test-data-terminal.domain';
import { TestDataTerminalDispatcher } from '../state/test-data-terminal.dispatcher';

@Injectable({
  providedIn: 'root'
})
export class TestDataTerminalService {
  private apiUrl = environment.dev_env
  constructor(private http: HttpClient, private terminalDispatcher: TestDataTerminalDispatcher) { }

  fetchAllTerminal() {
    return this.http.get<CustomHttpResponse<TestDataTerminalDomain[]>>(`${this.apiUrl}/terminal/list`)
  }

  addTerminal(payload: TestDataTerminalDomain) {
    return this.http.post<CustomHttpResponse<any>>(`${this.apiUrl}/terminal/create`, payload)
  }

  updateTerminal(payload: TestDataTerminalDomain) {
    return this.http.post<CustomHttpResponse<any>>(`${this.apiUrl}`, payload)
  }

  deleteTerminal(id: number) {
    return this.http.delete<CustomHttpResponse<any>>(`${this.apiUrl}/` + id)
  }

  onFetchTerminalDispatch() {
    this.terminalDispatcher.TestDataTerminalGetDispatch();
  }

  onAddTerminalDispatch(payload: TestDataTerminalDomain) {
    this.terminalDispatcher.TestDataTerminalAddDispatch(payload)
  }

  onUpdateTerminalDispatch(payload: TestDataTerminalDomain) {
    this.terminalDispatcher.TestDataTerminalUpdateDispatch(payload)
  }

  onDeleteTerminalDispatch(id: number) {
    this.terminalDispatcher.TestDataTerminalDeleteDispatch(id)
  }

} 
