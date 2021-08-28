import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { PinComponent } from './pin/pin.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [  {path:"",redirectTo:"register",pathMatch:"full"},
{path:"register",component:UserRegisterComponent},
{path:"account",component: UserAccountComponent},
{path:"pin",component:PinComponent},
{path:"pin1",component:PinComponent},
{path:"login",component:LoginComponent},
{path:"demo",component:DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
