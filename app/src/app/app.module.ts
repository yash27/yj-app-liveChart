import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import * as highstock from 'highcharts/modules/stock.src'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ highstock ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
