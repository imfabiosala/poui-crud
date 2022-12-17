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

  getCities(stateId: string) {
    switch (stateId) {
      case 'ES': {
        return [
          { label: 'Colatina', value: '01506' },
          { label: 'Linhares', value: '03205' },
          { label: 'Serra',    value: '05002' },
          { label: 'Vitória',  value: '05309' }
        ];
      }
      case 'MG': {
        return [
          { label: 'Belo Horizonte', value: '06200' },
          { label: 'Juiz de Fora',   value: '36702' },
          { label: 'Nanuque',        value: '44300' },
          { label: 'Uberlândia',     value: '70206' }
        ];
      }
      case 'RJ': {
        return [
          { label: 'Duque de Caxias', value: '01702' },
          { label: 'Niterói',         value: '03302' },
          { label: 'Rio de Janeiro',  value: '04557' },
          { label: 'Volta Redonda',   value: '06305' }
        ];
      }
      case 'SP': {
        return [
          { label: 'Campinas',              value: '09502' },
          { label: 'Guarulhos',             value: '18800' },
          { label: 'São Bernardo do Campo', value: '48708' },
          { label: 'São Paulo',             value: '50308' }
        ];
      }
    }
    return [];
  }

  postVendor(formData: string) {
    return this.http.post(this.apiUrl, formData)
  }

  getVendor(vendorId: string) {
    return this.http.get<Vendor>(this.apiUrl + `/${this.type}/${vendorId}`);
  }

  putVendor(vendorId: string, formData: string) {
    return this.http.put(this.apiUrl + `/${this.type}/${vendorId}`, formData);
  }
  
}