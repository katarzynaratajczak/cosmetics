import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KosmetykShowComponent } from './kosmetyki/kosmetyk-show/kosmetyk-show.component';
import { AddKosmetykComponent } from './kosmetyki/add-kosmetyk/add-kosmetyk.component';


const routes: Routes = [
  {path: 'kosmetyk-show', component: KosmetykShowComponent},
  {path: 'add-kosmetyk', component: AddKosmetykComponent},
  {path: '', redirectTo: '/kosmetyk-show', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
