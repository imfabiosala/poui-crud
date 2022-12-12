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
      label: 'Código',
      maxLength: 6
    },
    {
      property: 'storeId',
      label: 'Loja',
      maxLength: 2
    },
    {
      property: 'name',
      label: 'Razão Social',
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
      label: 'Situação',
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
      label: 'Endereço'
    },
    {
      property: 'stateId',
      label: 'Estado',
      options: [
        { label: 'Acre', value: 'AC' },
        { label: 'Alagoas', value: 'AL' },
        { label: 'Amapá', value: 'AP' },
        { label: 'Amazonas', value: 'AM' },
        { label: 'Bahia', value: 'BA' },
        { label: 'Ceará', value: 'CE' },
        { label: 'Distrito Federal', value: 'DF' },
        { label: 'Espírito Santo', value: 'ES' },
        { label: 'Goiás', value: 'GO' },
        { label: 'Maranhão', value: 'MA' },
        { label: 'Mato Grosso', value: 'MT' },
        { label: 'Mato Grosso do Sul', value: 'MS' },
        { label: 'Minas Gerais', value: 'MG' },
        { label: 'Pará', value: 'PA' },
        { label: 'Paraíba', value: 'PB' },
        { label: 'Paraná', value: 'PR' },
        { label: 'Pernambuco', value: 'PE' },
        { label: 'Piauí', value: 'PI' },
        { label: 'Rio de Janeiro', value: 'RJ' },
        { label: 'Rio Grande do Norte', value: 'RN' },
        { label: 'Rio Grande do Sul', value: 'RS' },
        { label: 'Rondônia', value: 'RO' },
        { label: 'Roraima', value: 'RR' },
        { label: 'Santa Catarina', value: 'SC' },
        { label: 'São Paulo', value: 'SP' },
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
        { label: 'São José do Rio Preto', value: '49805' },
        { label: 'José Bonifácio', value: '25706' },
        { label: 'Joinville', value: '09102' }
      ]
    }
  ];

}