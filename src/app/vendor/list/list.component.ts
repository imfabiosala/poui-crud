import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoNotificationService, PoTableAction } from '@po-ui/ng-components';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  vendorList: Array<any> = new Array();
  columnTable: Array<any> = new Array();

  actions: Array<PoTableAction> = [
    { action: this.updateVendor.bind(this), icon: 'po-icon-edit', label: '' }
  ];

  updateVendor(row: any) {
    const vendorId = row.code + row.storeId;
    this.router.navigate([`/vendor/edit/${vendorId}`]);
  }

  constructor(private listService: ListService, private router: Router, private poNotification: PoNotificationService) { }

  ngOnInit(): void {
    this.updateVendorList();
    this.columnTable = this.listService.getColumns();
  }

  updateVendorList(): void {
    this.listService.getVendorList().subscribe(response => {
      this.vendorList = response.items;
    });
  }

  redirect() {
    this.router.navigate(['/vendor/new']);
  }

}