import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DividerComponent } from './divider/divider.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { NewAppComponent } from './new-app/new-app.component';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    DividerComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    NewAppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
