import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaultKeyComponent } from './components/cault-key/cault-key.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    CaultKeyComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
