import { TestDataKeysDomain } from "../domain/test-data-keys.domain";

export class TestDataKeysGet {
    static readonly type = '[Key Management] Get';
}

export class TestDataKeysAdd {
    static readonly type = '[Key Management] Add';
    constructor(public payload: TestDataKeysDomain) {}
}

export class TestDataKeysUpdate {
    static readonly type = '[Key Management] Update';
    constructor(public payload: TestDataKeysDomain) {}
}

export class TestDataKeysDelete {
    static readonly type = '[Key Management] Delete';
    constructor(public id: number) {}
}
