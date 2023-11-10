import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomHttpResponse } from 'src/app/shared/domain/customHttpResponse';
import { environment } from 'src/environments/environment';
import { TestDataQrCodeDomain } from '../domain/test-data-qr-code.domain';
import { TestDataQrCodeDispatcher } from '../state/test-data-qr-code.dispatcher';

@Injectable({
  providedIn: 'root'
})
export class TestDataQrCodeService {
  private apiUrl = environment.dev_env
  constructor(private http: HttpClient, private qrCodeDispatch: TestDataQrCodeDispatcher) { }

  fetchAllQRCode() {
    return this.http.get<CustomHttpResponse<any>>(`${this.apiUrl}/qrcode/list`)
  }

  addQRCode(data: TestDataQrCodeDomain) {
    return this.http.post<CustomHttpResponse<any>>(`${this.apiUrl}/qrcode/create`, data)
  }

  updateQRCode(data: TestDataQrCodeDomain) {
    return this.http.post<CustomHttpResponse<any>>(`${this.apiUrl}`, data)
  }

  deleteQRCode(id: number) {
    return this.http.delete<CustomHttpResponse<any>>(`${this.apiUrl}/` + id)
  }

  onGetQRCodeDispatch() {
    this.qrCodeDispatch.TestDataQrCodeGetDispatch();
  }

  onAddQRCodeDispatch(data: TestDataQrCodeDomain) {
    this.qrCodeDispatch.TestDataQrCodeAddDispatch(data)
  }

  onUpdateQRCodeDispatch(data: TestDataQrCodeDomain) {
    this.qrCodeDispatch.TestDataQrCodeUpdateDispatch(data)
  }

  onDeleteQRCodeDispatch(id: number) {
    this.qrCodeDispatch.TestDataQrCodeDeleteDispatch(id)
  }
}
