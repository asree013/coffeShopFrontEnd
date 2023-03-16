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
import { ProfileAdminComponent } from './components/profiles/profile-admin/profile-admin.component';
import { ProfileHomeComponent } from './components/profiles/profile-home/profile-home.component';
import { ProfileEditComponent } from './components/profiles/profile-edit/profile-edit.component';
import { CardAddComponent } from './components/shp-card/card-add/card-add.component';
import { CardHomeComponent } from './components/shp-card/card-home/card-home.component';
import { CardAdminComponent } from './components/shp-card/card-admin/card-admin.component';
import { CardEditComponent } from './components/shp-card/card-edit/card-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  // { path: '**', redirectTo: '/product' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product', component: ProductHomeComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent },
  { path: 'product/admin', component: HomeProductComponent},
  { path: 'admin', component: HomeAdminComponent },
  { path: 'profile/admin', component: ProfileAdminComponent},
  { path: 'profile/home', component: ProfileHomeComponent},
  { path: 'profile/edit/:id', component: ProfileEditComponent},
  { path: 'product/addcart', component: CardAddComponent},
  { path: 'product/cart/home', component: CardHomeComponent},
  { path: 'product/cart/admin', component: CardAdminComponent},
  { path: 'product/cart/edit', component: CardEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
