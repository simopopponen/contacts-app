import {Contact} from "../contact";

export interface ContactStorage {
  saveContacts(contact: Contact);
  deleteContact(contact: Contact);
  findContacts();
}
