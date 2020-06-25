import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KosmetykiListComponent} from './kosmetyki/kosmetyki-list/kosmetyki-list.component';
import { AddKosmetykComponent } from './kosmetyki/add-kosmetyk/add-kosmetyk.component';


const routes: Routes = [
  {path: 'kosmetyki-list', component: KosmetykiListComponent},
  {path: 'add-kosmetyk', component: AddKosmetykComponent},
  {path: '', redirectTo: '/kosmetyki-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
