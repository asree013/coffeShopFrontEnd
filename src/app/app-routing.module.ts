import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authen/login/login.component';
import { ProductCreateComponent } from './components/admin/product/product-create/product-create.component';
import { ProductDetailComponent } from './components/admin/product/product-detail/product-detail.component';
import { ProductEditComponent } from './components/admin/product/product-edit/product-edit.component';
import { ProductHomeComponent } from './components/admin/product/product-home/product-home.component';
import { RegisterComponent } from './components/authen/register/register.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { HomeProductComponent } from './components/admin/home-product/home-product.component';


const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  // { path: '**', redirectTo: '/product' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product', component: ProductHomeComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/edit', component: ProductEditComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent },
  { path: 'product/admin', component: HomeProductComponent},
  { path: 'admin', component: HomeAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
