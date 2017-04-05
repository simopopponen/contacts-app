import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactListItemComponent } from './contact-list/contact-list-item/contact-list-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import {DialogService} from './service/dialog.service';
import {MapdialogComponent} from "./contactdialogs/mapdialog/mapdialog.component";
import {ContactdialogComponent} from "./contactdialogs/contactdialog/contactdialog.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    MapdialogComponent,
    ContactdialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
  entryComponents: [MapdialogComponent, ContactdialogComponent]
})
export class AppModule { }
