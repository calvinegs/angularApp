import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceService } from 'src/app/data/data-source.service';
import { Order, Product } from 'src/app/data/entities';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  selectedCategory = "All";

  constructor(public dataSource: DataSourceService, private router: Router) { 
    this.dataSource.order = new Order;
  }

  ngOnInit(): void {
  }

  get products(): Product[] {
    return this.dataSource.getProducts("id", this.selectedCategory === "All" ? undefined : this.selectedCategory);
  }

  get categories():string[] {
    return ["All", ...this.dataSource.getCategories()];
  }

  handleCategorySelect(category: string) {
    this.selectedCategory = category;
  }

  handleAdd(data: { product: Product, quantity: number }) {
    this.dataSource.order.addProduct(data.product, data.quantity);
  }

  handleSubmit() {
    this.router.navigateByUrl("/order");
  }

}
