import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceService } from 'src/app/data/data-source.service';
import { Order } from 'src/app/data/entities';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private dataSource: DataSourceService, private router: Router) { }

  ngOnInit(): void {
  }

  get order(): Order {
    return this.dataSource.order;
  }

  submit() {
    this.dataSource.storeOrder().subscribe(id =>
      this.router.navigateByUrl(`/summary/${id}`));
  }  
}
