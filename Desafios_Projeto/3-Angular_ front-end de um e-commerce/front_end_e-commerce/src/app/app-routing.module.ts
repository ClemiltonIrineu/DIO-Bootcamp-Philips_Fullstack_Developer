import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { HomeComponent } from './components/shared/home/home.component';
import { SobreComponent } from './components/shared/sobre/sobre.component';
import { SuporteComponent } from './components/shared/suporte/suporte.component';

const routes: Routes = [
  {   path: '', component: HomeComponent },
  {   path: 'produtos', component: BookstoreAppComponent },
  {   path: 'sobre', component: SobreComponent  },
  {   path: 'suporte', component: SuporteComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
