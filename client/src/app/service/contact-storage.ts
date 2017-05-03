import {Contact} from "../contact";
import {Observable} from "rxjs/Observable";

export interface ContactStorage {
  saveContacts(contact: Contact);
  deleteContact(contact: Contact);
  findContacts();
}
