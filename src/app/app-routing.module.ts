import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent }      from './products/products.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { GitHubReposComponent }   from './githubrepos/githubrepos.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/githubrepos', pathMatch: 'full' },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'githubrepos', component: GitHubReposComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }





