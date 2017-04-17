import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import {ContactService} from "./service/contact.service";
import {LocalStorageService} from "./service/local-storage.service";

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
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ContactService, DialogService, LocalStorageService],
  bootstrap: [AppComponent],
  entryComponents: [MapdialogComponent, ContactdialogComponent]
})
export class AppModule { }
