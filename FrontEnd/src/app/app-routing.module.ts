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

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'searchcontainer', component: SearchcontainerComponent },
  { path: 'resetpassword', component: ResetpasswordComponent},
  { path: 'history', component: HistoryContainerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
