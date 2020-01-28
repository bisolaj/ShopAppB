import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './views/productlist/productlist.component';
import { ProductdescComponent } from './views/productdesc/productdesc.component';


const routes: Routes = [
  {
  path: '', redirectTo: 'productList', pathMatch: 'full'
  },
  {
    path: 'productList', component: ProductlistComponent
  },
  {
    path: ':productName/:id', component: ProductdescComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
