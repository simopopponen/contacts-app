import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import * as _ from "lodash";
import {ContactStorage} from "./contact-storage";
import {Observable} from "rxjs/Observable";


@Injectable()
export class LocalStorageService implements ContactStorage {

  private localStorageKey = 'contacts';


  constructor() {
    if (localStorage.getItem(this.localStorageKey) === null) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  public saveContacts(contacts: Contact): void {

    localStorage[this.localStorageKey] = JSON.stringify(contacts);
  }

  public findContacts(): Observable<Contact> {
    let contacts =  JSON.parse(localStorage[this.localStorageKey]);
    return Observable.of(contacts);
  }

  public deleteContact(contacts: Contact) {


  }

}
