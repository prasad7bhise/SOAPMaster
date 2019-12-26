import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {AdminLoginComponent} from './Admin/login/login.component';
import {NotFoundErrorComponent} from './Admin/error/error.component';
import {CategoryAddComponent} from './Admin/category/add/categoryadd.component';
import { AppComponent } from './app.component';


import { AdminService } from './Admin/admin.service';
import {CategoryService} from './Admin/category/category.service';
import {MenuService} from './Admin/menu/menu.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {RouterModule, Route} from '@angular/router';
import { CategoryListComponent } from './Admin/category/list/categorylist.component';
import { MenuListComponent } from './Admin/menu/list/menulist.component';
import {CategoryUpdateComponent} from './Admin/category/update/categoryupdate.commponent';
import {MenuAddComponent} from './Admin/menu/add/addmenu.component';


const routes: Route[] = [

  {path: 'admin-login', component: AdminLoginComponent},

  {path: 'category-list', component: CategoryListComponent},
  {path: 'category-add', component: CategoryAddComponent},
  {path: 'category-update', component:  CategoryUpdateComponent},

  {path: 'menu-list', component: MenuListComponent},
  {path: 'menu-add', component: MenuAddComponent},

  {path: '', component: AdminLoginComponent},
 // {path: '**', component: NotFoundErrorComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,

    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,

    MenuListComponent,
    MenuAddComponent,

    NotFoundErrorComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AdminService,
    CategoryService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
