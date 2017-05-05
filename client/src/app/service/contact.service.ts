import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import * as _ from 'lodash';
import {LocalStorageService} from './local-storage.service';
import {ContactsApiService} from './contacts-api.service';
import {ContactStorage} from "./contact-storage";
import {environment} from "environments/environment";

@Injectable()
export class ContactService {

  contactStorage: ContactStorage;

  constructor(private localStorageService: LocalStorageService,
              private contactsApi: ContactsApiService) {
    this.contactStorage = environment.endPointUrl ? contactsApi : localStorageService;
    console.log(environment);
    }
    public findContacts()  {
      return this.contactStorage.findContacts();
  }
  public saveContacts(contact: Contact) {
    return this.contactStorage.saveContacts(contact);
  }
  public deleteContact(contact: Contact) {
    return this.contactStorage.deleteContact(contact);
    }
}
