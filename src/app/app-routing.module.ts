import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductAddComponent } from './admin/product-add/product-add.component';
import { ProductDetailComponent } from './admin/product-detail/product-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ProductListComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product/add', component: ProductAddComponent},
  {path: 'product/:productID', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }