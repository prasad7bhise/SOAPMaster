import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Component } from '@angular/core'

import {AdminLoginComponent} from './Admin/login/login.component'
import {NotFoundErrorComponent} from './Admin/error/error.component'
import {CategoryAddComponent} from './Admin/category/add/categoryadd.component'
import { AppComponent } from './app.component'
import { OrderListComponent } from './Admin/order/list/orderlist.component'
import { TableViewComponent } from './Admin/Tables/show/showtable.component'

import { AdminService } from './Admin/admin.service'
import {CategoryService} from './Admin/category/category.service'
import {MenuService} from './Admin/menu/menu.service'
import { TableService } from './Admin/Tables/table.service'
import {UserListComponent} from './Admin/userlist/userlist.component'
import {UserListService} from './Admin/userlist/userlist.service'
import {MenuUpdateComponent} from './Admin/menu/update/updatemenu.component'
import {PaymentListComponent} from './Admin/paymenthistory/payment.component'
//users
import {UserService} from './User/user.service'
import {UserProfileService} from './User/profile/profile.service'
import {UserCartListService} from './User/cartlist/cart.service'
import {UserCheckoutListService} from './User/checkout/checkout.service'
import { UserBillingListService } from './User/Billing/billinglist.service'

import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms'
import {RouterModule, Route} from '@angular/router'
import { CategoryListComponent } from './Admin/category/list/categorylist.component'
import { MenuListComponent } from './Admin/menu/list/menulist.component'
import {CategoryUpdateComponent} from './Admin/category/update/categoryupdate.commponent'
import {MenuAddComponent} from './Admin/menu/add/addmenu.component'

//user
import {ResetPassword} from './User/resetpass/reset.component'
import { LoginComponent } from './User/login/login.component'
import {RegisterComponent} from './User/register/register.component'
import {MenuUserComponent} from './User/menuview/menuview.component'
import {ProfileEditComponent} from './User/profile/editprofile/editprofile.component'
import {CartComponent} from './User/cartlist/cartlist.component'
import {UserCheckoutComponent} from './User/checkout/checkoutlist.component'
import {BillingListComponent} from './User/Billing/billing.component'
//separator
import {SeparatorBarComponent} from './Separator/separator.component'






const routes: Route[] = [

  {path: 'admin-login', component: AdminLoginComponent},

  {path: 'category-list', component: CategoryListComponent},
  {path: 'category-add', component: CategoryAddComponent},
  {path: 'category-update', component:  CategoryUpdateComponent},

  {path: 'menu-list', component: MenuListComponent},
  {path: 'menu-add', component: MenuAddComponent},
  {path: 'menu-update', component: MenuUpdateComponent},

  {path: 'order-list', component: OrderListComponent},

  {path: 'table-list', component: TableViewComponent},
  {path: 'admin-user', component: UserListComponent},
  {path: 'payment-list', component: PaymentListComponent},

//user
  {path: 'user-login', component: LoginComponent},
  {path: 'user-register', component: RegisterComponent},
  {path: 'user-reset', component: ResetPassword},
  {path: 'user-menu', component: MenuUserComponent},
  {path: 'user-edit', component: ProfileEditComponent},
  {path: 'user-cart', component: CartComponent},
  {path: 'user-checkout', component: UserCheckoutComponent},
  {path: 'user-billing' , component: BillingListComponent},

  {path: '', component: SeparatorBarComponent},
 // {path: '**', component: NotFoundErrorComponent}
//separator
{path: 'admin-users', component: SeparatorBarComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,

    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,

    MenuListComponent,
    MenuAddComponent,
    MenuUpdateComponent,

    OrderListComponent,

    TableViewComponent,
    UserListComponent,
    PaymentListComponent,
//users
    LoginComponent,
    RegisterComponent,
    ResetPassword,
    MenuUserComponent,
    ProfileEditComponent,
    CartComponent,
    UserCheckoutComponent,
    BillingListComponent,
//separator
SeparatorBarComponent,


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
    MenuService,
    TableService,
    UserListService,

    //users
    UserService,
    UserProfileService,
    UserCartListService,
    UserCheckoutListService,
    UserBillingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
