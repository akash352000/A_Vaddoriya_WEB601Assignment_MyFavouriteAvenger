import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponentComponent } from './content-card-component/content-card-component.component';
import { HoverAffectDirectiveDirective } from './hover-affect-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponentComponent,
    HoverAffectDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ContentCardComponentComponent
  ]
})
export class AppModule { }
