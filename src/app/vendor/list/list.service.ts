import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  public apiUrl: string = 'http://192.168.15.52/rest/api/crm/v1/customerVendor/2/';

  constructor(private http: HttpClient) { }

  getSupplierList(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'code', label: 'Código'},
      { property: 'storeId', label: 'Loja' },
      { property: 'name', label: 'Razão Social' },
      { property: 'strategicCustomerType', label: 'Tipo',
        type: 'label',
        labels: [
          { value: 'F', color: 'color-08', label: 'Físico' },
          { value: 'J', color: 'color-12', label: 'Jurídico' }
        ]
      },
      { property: 'registerSituation', label: 'Situação',
        type: 'label',
        labels: [
          { value: '1', color: 'color-07', label: 'Inativo' },
          { value: '2', color: 'color-11', label: 'Ativo' },
          { value: '3', color: 'color-09', label: 'Cancelado' },
          { value: '4', color: 'color-12', label: 'Pendente' },
          { value: '5', color: 'color-08', label: 'Suspenso' }
        ] 
      }
    ];
  }

}