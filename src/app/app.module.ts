import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PruebaFontAwesomeComponent } from './Components/prueba-font-awesome/prueba-font-awesome.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaFontAwesomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
