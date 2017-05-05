import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import * as _ from "lodash";
import {ContactStorage} from "./contact-storage";
import {Observable} from "rxjs";


@Injectable()
export class LocalStorageService implements ContactStorage {

  private localStorageKey = 'contacts';

  constructor() {
    if (localStorage.getItem(this.localStorageKey) === null) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  public saveContacts(contact: Contact) {
    let contacts = this.readContactsLocalStorage();
    if (!contact.id) {
      let lastSaved = <Contact>_.maxBy(contacts, 'id');
      contact.id = lastSaved ? lastSaved.id + 1 : 1;
      contacts.push(contact);
    } else {
      contacts = _.map(contacts, function (cont: Contact) {
        return cont.id === contact.id ? contact : cont;
      });
    }
    this.writeLocalStorageContacts(contacts);
      return Observable.of(contacts);
  }
  public findContacts() {
    let contacts = this.readContactsLocalStorage();
    return Observable.of(contacts);
  }
  public deleteContact(contact: Contact) {
    let contacts = this.readContactsLocalStorage();
    _.remove(contacts, function (cont: Contact) {
      return _.isEqual(contact.id, cont.id);
    });
    this.writeLocalStorageContacts(contacts);
    return Observable.of(contacts);
  }
  public readContactsLocalStorage() {
    let data = localStorage.getItem(this.localStorageKey);
    return JSON.parse(data);
  }
  private writeLocalStorageContacts(contacts) {
    contacts = JSON.stringify(contacts);
    localStorage.setItem(this.localStorageKey, contacts);
  }
}
