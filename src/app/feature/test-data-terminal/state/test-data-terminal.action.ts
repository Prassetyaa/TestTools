import { TestDataTerminalDomain } from "../domain/test-data-terminal.domain";

export class TestDataTerminalGet {
    static readonly type = '[Terminal Management] Get';
}

export class TestDataTerminalAdd {
    static readonly type = '[Terminal Management] Add';
    constructor(public payload: TestDataTerminalDomain) {}
}

export class TestDataTerminalUpdate {
    static readonly type = '[Terminal Management] Update';
    constructor(public payload: TestDataTerminalDomain) {}
}

export class TestDataTerminalDelete {
    static readonly type = '[Terminal Management] Delete';
    constructor(public id: number) {}
}
