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
      // if lastSaved found -> lastsaved.id + 1, else contact.id == 1
      contact.id = lastSaved ? lastSaved.id + 1 : 1;
      contacts.push(contact);
    } else {
      contacts = _.map(contacts, function (cont: Contact) {
        return cont.id === contact.id ? contact : cont;
      });
    }
    this.writeLocalStorageContacts(contacts);
    // return contacts;
      return Observable.of(contacts);
    // localStorage[this.localStorageKey] = JSON.stringify(contacts);
  }

  public findContacts() {
    let contacts = this.readContactsLocalStorage();
    return Observable.of(contacts);
  }

  public deleteContact(contacts: Contact) {


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
