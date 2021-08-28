import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { PinComponent } from './pin/pin.component';
import { UserServiceService } from './user-service.service';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransactionHistoryComponent,
    UserRegisterComponent,
    UserAccountComponent,
    PinComponent,
    DemoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
