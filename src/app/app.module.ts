import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KosmetykiModule } from './kosmetyki/kosmetyki.module';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { KosmetykService } from './kosmetyki/kosmetyk.service';
import { KosmetykPropertiesService } from './kosmetyki/kosmetyk-properties.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KosmetykiModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [KosmetykService, KosmetykPropertiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
