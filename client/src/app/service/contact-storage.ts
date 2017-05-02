import {Contact} from "../contact";

export interface ContactStorage {
  findContacts();
  saveContact(contact: Contact);
  deleteContact(contact: Contact);
}
