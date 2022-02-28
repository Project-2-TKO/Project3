import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchcontainerComponent } from './components/searchcontainer/searchcontainer.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { History } from 'ngx-bootstrap/utils/facade/browser';
import { HistoryContainerComponent } from './components/history-container/history-container.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ReviewpageComponent } from './components/reviewpage/reviewpage.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { WriterevComponent } from './components/writerev/writerev.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'frontpage', component: FrontpageComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'userprofile', component: UserprofileComponent,  canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'cart', component: CartComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'checkout', component: CheckoutComponent,  canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }}, 
  { path: 'searchcontainer', component: SearchcontainerComponent,  canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'resetpassword', component: ResetpasswordComponent},
  { path: 'history', component: HistoryContainerComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'wishlist', component: WishlistComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'reviews/:id', component: ReviewpageComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'dark', component: ThemeToggleComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }}, 
  { path: 'writerev/:id', component: WriterevComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
