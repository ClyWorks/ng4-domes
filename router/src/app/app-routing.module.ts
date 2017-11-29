import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StockComponent} from './stock/stock.component';
import {Get404Component} from './get404/get404.component';
import {MailistComponent} from './mailist/mailist.component';
import {BuylistComponent} from './buylist/buylist.component';
import {ConsultComponent} from './consult/consult.component';
import {PermissionGuard} from "./guard/permission.guard";
import {FocusGuard} from "./guard/focus.guard";
import {StockResolve} from "./guard/stock.resolve";



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'consule', component: ConsultComponent, outlet: 'aux'},
  {path: 'stock/:id', component: StockComponent, data: [{"ispod": true}], children:[
    {path: '', component: BuylistComponent},
    {path: 'mai', component: MailistComponent}
  ],
    /*canActivate:[PermissionGuard],
    canDeactivate:[FocusGuard]*/
  resolve:{
    stock:StockResolve
  }
  },

  {path: '**', component: Get404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
