import { TestDataPanDomain } from "../domain/test-data-pan.domain";

export class TestDataPanGet {
    static readonly type = '[PAN Management] Get';
}

export class TestDataPanAdd {
    static readonly type = '[PAN Management] Add';
    constructor(public payload: TestDataPanDomain) {}
}

export class TestDataPanUpdate {
    static readonly type = '[PAN Management] Update';
    constructor(public payload: TestDataPanDomain) {}
}

export class TestDataPanDelete {
    static readonly type = '[PAN Management] Delete';
    constructor(public id: number) {}
}
