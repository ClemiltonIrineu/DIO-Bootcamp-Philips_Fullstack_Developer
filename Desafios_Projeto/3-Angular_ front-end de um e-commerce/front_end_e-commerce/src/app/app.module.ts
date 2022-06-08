import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { FilterComponent } from './components/bookstore-app/filter/filter.component';
import { ProductListComponent } from './components/bookstore-app/product-list/product-list.component';
import { ProductItemComponent } from './components/bookstore-app/product-list/product-item/product-item.component';
import { ProductListComponentService } from './components/bookstore-app/product-list/product-list-component.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SobreComponent } from './components/shared/sobre/sobre.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuporteComponent } from './components/shared/suporte/suporte.component';
import { HomeComponent } from './components/shared/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    FilterComponent,
    ProductListComponent,
    ProductItemComponent,
    SobreComponent,
    SuporteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ProductListComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
