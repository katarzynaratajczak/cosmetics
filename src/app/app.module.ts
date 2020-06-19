import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KosmetykiModule } from './kosmetyki/kosmetyki.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KosmetykiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
