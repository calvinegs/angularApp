import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './pages/product-item/product-item.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { HeaderComponent } from './pages/header/header.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { DataModule } from './data/data.module';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { SummaryComponent } from './pages/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    CategoryListComponent,
    HeaderComponent,
    ProductListComponent,
    OrderDetailsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
