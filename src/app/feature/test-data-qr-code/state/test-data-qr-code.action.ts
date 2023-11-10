import { TestDataQrCodeDomain } from '../domain/test-data-qr-code.domain';

export class TestDataQrCodeGet {
  static readonly type = '[QR Code] Get';
}

export class TestDataQrCodeAdd {
  static readonly type = '[QR Code] Add';
  constructor(public data: TestDataQrCodeDomain) {}
}

export class TestDataQrCodeUpdate {
  static readonly type = '[QR Code] Update';
  constructor(public data: TestDataQrCodeDomain) {}
}

export class TestDataQrCodeDelete {
  static readonly type = '[QR Code] Delete';
  constructor(public id: number) {}
}
