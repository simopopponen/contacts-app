import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Contact} from '../contact';

@Injectable()
export class ContactsApiService {

  url = 'http://localhost:49925/api/contacts';

  constructor(private http: Http) { }

  findContacts() {
    return  this.http
      .get(this.url)
      .map(response => response.json() as Contact[]);
  }

  saveContact(contact: Contact) {
    return contact.id ? this.updateContact(contact) : this.createContact(contact);
  }

  createContact(contact: Contact) {
    return this.http.post(this.url, contact)
  }

  updateContact(contact: Contact) {
    return this.http.put(this.url, contact);

  }
}
