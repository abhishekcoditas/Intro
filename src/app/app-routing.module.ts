import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockitGuard } from './blockit.guard';
import { FirstComponent } from './first/first.component';
import { FourthComponent } from './fourth/fourth.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {path:'first' , component: FirstComponent},
  {path:'second', component: SecondComponent},
  {path:'third', component: ThirdComponent},
  {path:'fourth', component: FourthComponent},
  {path:'',redirectTo:'/first',pathMatch:'full'},
  { path: 'customer', 
  canActivate:[BlockitGuard],
  loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  {path:"**", component:SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
