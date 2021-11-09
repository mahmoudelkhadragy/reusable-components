import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FaInputModule } from './lib/fa-input.module';

@NgModule({
  declarations: [AppComponent, FormsComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule, FaInputModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
