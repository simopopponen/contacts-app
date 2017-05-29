import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, ConnectionBackend, RequestOptions, XHRBackend} from '@angular/http';
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
import { ContactsApiService} from './service/contacts-api.service';
import { ContactAddressPipe } from './contact-list/pipes/contact-address.pipe';
import {NgPipesModule} from 'ngx-pipes';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './user/login/login.component';
import { RouterModule } from '@angular/router';
import {HttpService} from "./service/http.service";


const routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },

  ]

export function getHttp(backend: ConnectionBackend, options: RequestOptions) {
  return new HttpService(backend, options);
}

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    MapdialogComponent,
    ContactdialogComponent,
    ContactAddressPipe,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgPipesModule,
    RouterModule.forRoot(routes)
  ],
  providers:
    [{
      provide: HttpService,
      useFactory: getHttp,
      deps: [XHRBackend, RequestOptions]
    }, ContactService, DialogService, LocalStorageService, ContactsApiService],
  bootstrap: [AppComponent],
  entryComponents: [MapdialogComponent, ContactdialogComponent]
})
export class AppModule { }
