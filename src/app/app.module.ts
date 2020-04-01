import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminComponent } from './admin/admin.component';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductDetailComponent } from './admin/product-detail/product-detail.component';
import { ProductAddComponent } from './admin/product-add/product-add.component';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule],
  declarations: [ AppComponent, HelloComponent, AdminComponent, ProductListComponent, ProductDetailComponent, ProductAddComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
