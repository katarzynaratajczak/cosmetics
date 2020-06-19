import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddKosmetykComponent } from './add-kosmetyk/add-kosmetyk.component';
import { KosmetykShowComponent } from './kosmetyk-show/kosmetyk-show.component';



@NgModule({
  declarations: [AddKosmetykComponent, KosmetykShowComponent],
  imports: [
    CommonModule
  ]
})
export class KosmetykiModule { }
