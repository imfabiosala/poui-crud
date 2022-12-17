import { Address } from "./address.model";

export class Vendor {
    companyInternalId: string;
    code: string;
    name: string;
    storeId: string ;
    shortName: string;
    strategicCustomerType: string;
    registerSituation: string;
    type: number;
    entityType: string;
    address: Address = new Address();
    constructor(obj = {}) {
        Object.assign(this, obj);
    }
}