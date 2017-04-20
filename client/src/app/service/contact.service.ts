import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import * as _ from 'lodash';
import {LocalStorageService} from './local-storage.service';
import {ContactsApiService} from './contacts-api.service';
import {Observable} from "rxjs";
import {observable} from "rxjs/symbol/observable";

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor(private localStorageService: LocalStorageService,
              private contactsApi: ContactsApiService) {
    }

    public getContacts(): Observable<Contact[]> {
    // const contacts = this.localStorageService.loadContacts();
      let contacts = this.contactsApi.findContacts();
     return observable.contacts;

  }
  public addContact(contact: Contact): void {
    let contacts = this.localStorageService.loadContacts();
    contacts.push(contact);
    this.localStorageService.saveContacts(contacts);
  }
  public updateContact(contact: Contact): void {
    let contacts = this.localStorageService.loadContacts();
    let index = _.findIndex(contacts, ['id', contact.id]);
    if (index >= 0) {
      contacts.splice(index, 1, contact);
      this.localStorageService.saveContacts(contacts);
    }
  }
  public removeContact(id: string): void {
    let contacts = this.localStorageService.loadContacts();
    let index = _.findIndex(contacts, ['id', id]);
    if (index >= 0) {
      contacts.splice(index, 1);
      this.localStorageService.saveContacts(contacts);
    }
  }
}
