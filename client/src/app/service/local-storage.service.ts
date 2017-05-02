import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import * as _ from "lodash";
import {ContactStorage} from "./contact-storage";
import {Observable} from "rxjs/Observable";


@Injectable()
export class LocalStorageService implements ContactStorage {

  private localStorageKey = 'contacts';

  saveContact(contact: Contact) {
    throw new Error('Method not implemented.');
  }

  deleteContact(contact: Contact) {
    throw new Error('Method not implemented.');
  }
  constructor() {
    if (localStorage.getItem(this.localStorageKey) === null) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  public saveContacts(contacts: Contact[]): void {
    // let lastSaved = <Contact>_.maxBy(contacts, 'id');
    // if lastSaved -> lastSaved.id + 1, else Contact.id == 1
    // contact.id = lastSaved ? lastSaved.id + 1 : 1;
    localStorage[this.localStorageKey] = JSON.stringify(contacts);
  }

  public findContacts(): Observable<Contact[]> {
    let contacts =  JSON.parse(localStorage[this.localStorageKey]);
    return Observable.of(contacts);
  }
}
