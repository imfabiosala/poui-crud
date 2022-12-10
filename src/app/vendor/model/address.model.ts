import { City } from "./city.model";
import { State } from "./state.model";

export class Address {
    address: string;
    number: string;
    zipCode: string;
    complement: string;
    district: string;
    city: City = new City();
    state: State = new State();
    constructor(obj = {}) {
        Object.assign(this, obj);
    }
}