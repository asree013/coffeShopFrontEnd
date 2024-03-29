import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/section/header/header.component';
import { SideNavComponent } from './components/section/side-nav/side-nav.component';
import { SidebarComponent } from './components/section/sidebar/sidebar.component';
import { RegisterComponent } from './components/authen/register/register.component';
import { LoginComponent } from './components/authen/login/login.component';
import { PromotionHomeComponent } from './components/admin/promotion/promotion-home/promotion-home.component';
import { ProductCreateComponent } from './components/admin/product/product-create/product-create.component';
import { ProductEditComponent } from './components/admin/product/product-edit/product-edit.component';
import { ProductHomeComponent } from './components/admin/product/product-home/product-home.component';
import { ProductShowComponent } from "./components/admin/product/product-show/product-show.component";
import { ProductDetailComponent } from './components/admin/product/product-detail/product-detail.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { ProductAdminComponent } from './components/admin/product/product-admin/product-admin.component';
import { HomeProductComponent } from './components/admin/home-product/home-product.component';
import { ProfileAdminComponent } from './components/profiles/profile-admin/profile-admin.component';
import { ProfileHomeComponent } from './components/profiles/profile-home/profile-home.component';
import { ProfileEditComponent } from './components/profiles/profile-edit/profile-edit.component';
import { CardHomeComponent } from './components/shp-card/card-home/card-home.component';
import { CardAdminComponent } from './components/shp-card/card-admin/card-admin.component';
import { CardEditComponent } from './components/shp-card/card-edit/card-edit.component';
import { CardAddComponent } from './components/shp-card/card-add/card-add.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SideNavComponent,
        RegisterComponent,
        LoginComponent,
        PromotionHomeComponent,
        ProductCreateComponent,
        ProductEditComponent,
        ProductHomeComponent,
        ProductShowComponent,
        ProductDetailComponent,
        SidebarComponent,
        HomeAdminComponent,
        ProductAdminComponent,
        HomeProductComponent,
        ProfileAdminComponent,
        ProfileHomeComponent,
        ProfileEditComponent,
        CardHomeComponent,
        CardAdminComponent,
        CardEditComponent,
        CardAddComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ]
})
export class AppModule { }
