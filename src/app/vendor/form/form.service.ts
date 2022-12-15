import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from '../model/vendor.model';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  public apiUrl: string = 'http://imfabiosala.ddns.net:8282/rest/api/crm/v1/customerVendor';
  public type: string = '2';

  constructor(private http: HttpClient) { }

  getVendor(vendorId: string) {
    return this.http.get<Vendor>(this.apiUrl + `/${this.type}/${vendorId}`);
  }

  putVendor(vendorId: string, formData: string) {
    return this.http.put(this.apiUrl + `/${this.type}/${vendorId}`, formData);
  }
  
}