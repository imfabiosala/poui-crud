import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fields: Array<PoDynamicFormField> = [
    {
      property: 'code',
      label: 'C�digo',
      maxLength: 6
    },
    {
      property: 'storeId',
      label: 'Loja',
      maxLength: 2
    },
    {
      property: 'name',
      label: 'Raz�o Social',
      maxLength: 40
    },
    {
      property: 'shortName',
      label: 'Nome Fantasia',
      maxLength: 20
    },
    {
      property: 'entityType',
      label: 'Tipo',
      options: [
        { label: 'Fisica', value: 'F' },
        { label: 'Juridica', value: 'J' },
        { label: 'Estrangeiro', value: 'X' }
      ]
    },
    {
      property: 'registerSituation',
      label: 'Situa��o',
      options: [
        { label: 'Bloqueado', value: '1' },
        { label: 'Ativo', value: '2' }
      ]
    },
    {
      property: 'zipCode',
      label: 'CEP',
      maxLength: 9
    },
    {
      property: 'address',
      label: 'Endere�o'
    },
    {
      property: 'stateId',
      label: 'Estado',
      options: [
        { label: 'Acre', value: 'AC' },
        { label: 'Alagoas', value: 'AL' },
        { label: 'Amap�', value: 'AP' },
        { label: 'Amazonas', value: 'AM' },
        { label: 'Bahia', value: 'BA' },
        { label: 'Cear�', value: 'CE' },
        { label: 'Distrito Federal', value: 'DF' },
        { label: 'Esp�rito Santo', value: 'ES' },
        { label: 'Goi�s', value: 'GO' },
        { label: 'Maranh�o', value: 'MA' },
        { label: 'Mato Grosso', value: 'MT' },
        { label: 'Mato Grosso do Sul', value: 'MS' },
        { label: 'Minas Gerais', value: 'MG' },
        { label: 'Par�', value: 'PA' },
        { label: 'Para�ba', value: 'PB' },
        { label: 'Paran�', value: 'PR' },
        { label: 'Pernambuco', value: 'PE' },
        { label: 'Piau�', value: 'PI' },
        { label: 'Rio de Janeiro', value: 'RJ' },
        { label: 'Rio Grande do Norte', value: 'RN' },
        { label: 'Rio Grande do Sul', value: 'RS' },
        { label: 'Rond�nia', value: 'RO' },
        { label: 'Roraima', value: 'RR' },
        { label: 'Santa Catarina', value: 'SC' },
        { label: 'S�o Paulo', value: 'SP' },
        { label: 'Sergipe', value: 'SE' },
        { label: 'Tocantins', value: 'TO' },
        { label: 'Estrangeiro', value: 'EX' }
      ]
    },
    {
      property: 'cityCode',
      label: 'Cidade',
      options: [
        { label: 'Colatina', value: '01506' },
        { label: 'Adolfo', value: '00204' },
        { label: 'S�o Jos� do Rio Preto', value: '49805' },
        { label: 'Jos� Bonif�cio', value: '25706' },
        { label: 'Joinville', value: '09102' }
      ]
    }
  ];

}