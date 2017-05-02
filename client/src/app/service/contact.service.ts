import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import * as _ from 'lodash';
import {LocalStorageService} from './local-storage.service';
import {ContactsApiService} from './contacts-api.service';
import {Observable} from "rxjs";
import {observable} from "rxjs/symbol/observable";
import {ContactStorage} from "./contact-storage";
import {environment} from "environments/environment.local";



@Injectable()
export class ContactService {

  contactStorage: ContactStorage;

  //private contacts: Observable<Contact[]>;

  constructor(private localStorageService: LocalStorageService,
              private contactsApi: ContactsApiService) {
    this.contactStorage = environment.endPointUrl ? contactsApi : localStorageService;
    }

    public getContacts(contact: Contact)  {
    // const contacts = this.localStorageService.loadContacts();
     // let contacts = this.contactsApi.findContacts();
     return this.contactStorage.findContacts();

  }
  public saveContacts(contact: Contact) {
    return this.contactStorage.saveContact(contact);
  }
  public removeContact(contact: Contact) {
    /*let contacts = this.localStorageService.loadContacts();
    let index = _.findIndex(contacts, ['id', id]);
    if (index >= 0) {
      contacts.splice(index, 1);
      this.localStorageService.saveContacts(contacts);*/
    return this.contactsApi.deleteContact(contact);
    }

}
