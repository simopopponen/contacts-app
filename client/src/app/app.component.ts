import { Component, OnInit } from '@angular/core';
import {Contact} from "./contact";
import {ContactService} from "./service/contact.service";
import {DialogService} from "./service/dialog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService]
})
export class AppComponent implements OnInit{

  title = 'Contacts App';

  contacts: Contact[];

  constructor(private contactService: ContactService, private dialogService: DialogService) {}
  // constructor(public dialogService: DialogService, public contactService: ContactService) {}

  addContact(): void {
    let input = this.dialogService.contactDialog();
    input.subscribe(result => {
      if (result) {
        this.contactService.addContact(result);
        this.loadContacts();
      }
    });
  }
  editContact(contact: Contact): void {
    let input = this.dialogService.contactDialog(contact);
    input.subscribe(result => {
      if (result) {
        this.contactService.updateContact(result);
        this.loadContacts();
      }
    });
  }

  contactMap(contact: Contact){
    let address = contact.streetAddress + ', ' + contact.postalCode + ' ' + contact.city;
    this.dialogService.mapDialog(address);
  }

  removeContact(contact: Contact): void {
    this.contactService.removeContact(contact.id.toString());
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContacts().then(contacts => this.contacts = contacts);
  }
  ngOnInit(): void {
    this.loadContacts();
  }

  // Call functions here for add, get and delete contacts
}
