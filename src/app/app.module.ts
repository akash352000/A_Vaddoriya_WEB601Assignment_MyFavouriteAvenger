import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponentComponent } from './content-card-component/content-card-component.component';
import { HoverAffectDirectiveDirective } from './hover-affect-directive.directive';
import { CreateContentComponentComponent } from './create-content-component/create-content-component.component';
import { MessageComponentComponent } from './message-component/message-component.component';
import { MatButtonModule} from '@angular/material/button';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { DialogBoxComponentComponent } from './modify-content-component/dialog-box-component/dialog-box-component.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContentDetailsComponentComponent } from './content-details-component/content-details-component.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponentComponent,
    HoverAffectDirectiveDirective,
    CreateContentComponentComponent,
    MessageComponentComponent,
    ModifyContentComponentComponent,
    DialogBoxComponentComponent,
    ContentDetailsComponentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ContentCardComponentComponent
  ]
})
export class AppModule { }
