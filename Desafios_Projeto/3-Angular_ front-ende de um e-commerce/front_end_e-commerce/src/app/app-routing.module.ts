import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { ProductListComponent } from './components/bookstore-app/product-list/product-list.component';
import { SobreComponent } from './components/shared/sobre/sobre.component';

const routes: Routes = [
  {   path: '', component: BookstoreAppComponent },
  {   path: 'produtos', component: ProductListComponent },
  {   path: 'sobre', component: SobreComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
