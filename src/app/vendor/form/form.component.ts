import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoDynamicFormField, PoNotificationService } from '@po-ui/ng-components';
import { Vendor } from '../model/vendor.model';
import { FormService } from './form.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  vendor: Vendor = new Vendor();

  vendorValues = {
    type: 2,
    code: "",
    storeId: "",
    name: "",
    shortName: "",
    strategicCustomerType: "J",
    registerSituation: "1",
    zipCode: "",
    address: "",
    stateId: "",
    cityCode: ""
  };

  vendorId: string | any;

  constructor(private formService: FormService, private poNotification: PoNotificationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.vendorValues = {
      type: 2,
      code: "",
      storeId: "",
      name: "",
      shortName: "",
      strategicCustomerType: "J",
      registerSituation: "1",
      zipCode: "",
      address: "",
      stateId: "",
      cityCode: ""
    };

    this.route.paramMap.subscribe(parameters => {
      this.vendorId = parameters.get('id');
    });

    if (this.vendorId) {
      this.fillForm();
    };

  };

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
      property: 'strategicCustomerType',
      label: 'Tipo',
      options: [
        { label: 'Física', value: 'F' },
        { label: 'Jurídica', value: 'J' },
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
      mask: '99999-999',
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

  private fillForm(): void {
    this.formService.getVendor(this.vendorId).pipe(first()).subscribe((vendor:Vendor) => {
      this.vendorValues.type                  = vendor.type;
      this.vendorValues.code                  = vendor.code;
      this.vendorValues.storeId               = vendor.storeId;
      this.vendorValues.name                  = vendor.name;
      this.vendorValues.shortName             = vendor.shortName;
      this.vendorValues.strategicCustomerType = vendor.strategicCustomerType;
      this.vendorValues.registerSituation     = vendor.registerSituation;
      this.vendorValues.zipCode               = vendor.address.zipCode;
      this.vendorValues.address               = vendor.address.address;
      this.vendorValues.stateId               = vendor.address.state.stateId;
      this.vendorValues.cityCode              = vendor.address.city.cityCode;
    });
  };

  private getForm(): void {
    this.vendor.type                           = this.vendorValues.type;
    this.vendor.code                           = this.vendorValues.code;
    this.vendor.storeId                        = this.vendorValues.storeId;
    this.vendor.name                           = this.vendorValues.name;
    this.vendor.shortName                      = this.vendorValues.shortName;
    this.vendor.strategicCustomerType          = this.vendorValues.strategicCustomerType;
    this.vendor.registerSituation              = this.vendorValues.registerSituation;
    this.vendor.address.zipCode                = this.vendorValues.zipCode;
    this.vendor.address.address                = this.vendorValues.address;
    this.vendor.address.state.stateId          = this.vendorValues.stateId;
    this.vendor.address.city.cityCode          = this.vendorValues.cityCode;
  };

  insertVendor(): void {
    this.getForm();
    this.formService.postVendor(JSON.stringify(this.vendor)).pipe(first()).subscribe(() => {
      this.poNotification.success('Fornecedor cadastrado com sucesso!');
      this.router.navigate(['vendor/list']);
    }, err => {
      let errMsg = JSON.parse(err.error.errMsg);
      this.poNotification.error(`Ops! Houve um erro. Código: ${errMsg.code}, ${decodeURIComponent(escape(errMsg.message))}, Detalhe: ${decodeURIComponent(escape(errMsg.detailedMessage))}.`)
    })
  }

  updateVendor(): void {
    this.getForm();
    this.formService.putVendor(this.vendor.code + this.vendor.storeId, JSON.stringify(this.vendor)).pipe(first()).subscribe(() => {
      this.poNotification.success('Fornecedor atualizado com sucesso!');
      this.router.navigate(['/vendor/list']);
    }, err => this.poNotification.error(err));
  }

}