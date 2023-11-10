import { TestDataMerchantDomain } from "../domain/test-data-merchant.domain";

export class TestDataMerchantGet {
    static readonly type = '[Merchant Management] Get';
}

export class TestDataMerchantAdd {
    static readonly type = '[Merchant Management] Add';
    constructor(public payload: TestDataMerchantDomain) {}
}

export class TestDataMerchantUpdate {
    static readonly type = '[Merchant Management] Update';
    constructor(public payload: TestDataMerchantDomain) {}
}

export class TestDataMerchantDelete {
    static readonly type = '[Merchant Management] Delete';
    constructor(public id: number) {}
}
