import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = ([
  { path: "products", component: ProductListComponent },
  { path: "order", component: OrderDetailsComponent },
  { path: "summary/:id", component: SummaryComponent },
  { path: "", redirectTo: "/products", pathMatch: "full" }
 ]);
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
