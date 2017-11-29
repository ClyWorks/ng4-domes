import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Get404Component } from './get404/get404.component';
import { BuylistComponent } from './buylist/buylist.component';
import { MailistComponent } from './mailist/mailist.component';
import { ConsultComponent } from './consult/consult.component';
import { PermissionGuard } from './guard/permission.guard';
import {FocusGuard} from "./guard/focus.guard";
import {StockResolve} from "./guard/stock.resolve";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent,
    Get404Component,
    BuylistComponent,
    MailistComponent,
    ConsultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PermissionGuard,FocusGuard,StockResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
