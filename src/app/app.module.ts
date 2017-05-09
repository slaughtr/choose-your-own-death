import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShamblingHallsOfCreepingDeathComponent } from './shambling-halls-of-creeping-death/shambling-halls-of-creeping-death.component';
import { YouAreANarcissistComponent } from './you-are-a-narcissist/you-are-a-narcissist.component';

@NgModule({
  declarations: [
    AppComponent,
    ShamblingHallsOfCreepingDeathComponent,
    YouAreANarcissistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
