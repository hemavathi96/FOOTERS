import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstFooterComponent } from './component/first-footer/first-footer.component';
import { CreativefooterComponent } from './component/creativefooter/creativefooter.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstFooterComponent,
    CreativefooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
