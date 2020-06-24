import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddKosmetykComponent } from './add-kosmetyk/add-kosmetyk.component';
import { KosmetykShowComponent } from './kosmetyk-show/kosmetyk-show.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddKosmetykComponent, KosmetykShowComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class KosmetykiModule { }
