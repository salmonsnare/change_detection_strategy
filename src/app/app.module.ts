import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Default } from './default.component';
import { OnPush } from './onpush.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    Default, 
    OnPush, 
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
