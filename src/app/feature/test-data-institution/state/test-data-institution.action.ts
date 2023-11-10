import { TestDataInstitutionDomain } from "../domain/test-data-institution";

export class TestDataInstitutionGet {
    static readonly type = '[InstitutionManagement] Get';
}

export class TestDataInstitutionAdd {
    static readonly type = '[InstitutionManagement] Add';
    constructor(public payload: TestDataInstitutionDomain) {}
}

export class TestDataInstitutionUpdate {
    static readonly type = '[InstitutionManagement] Update';
    constructor(public payload: TestDataInstitutionDomain) {} 
}

export class TestDataInstitutionDelete {
    static readonly type = '[InstitutionManagement] Delete';
    constructor(public id: number) {}
}
