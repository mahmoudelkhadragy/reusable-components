import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { FaInputComponent } from './components/forms/fa-input/fa-input.component';
import { InputRefDirective } from './common/input-ref.directive';

@NgModule({
  declarations: [AppComponent, FormsComponent, FaInputComponent, InputRefDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
