import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  vendorList: Array<any> = new Array();
  columnTable: Array<any> = new Array();

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

}