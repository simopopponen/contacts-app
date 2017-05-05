import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Contact} from "../contact";
import {ContactService} from "../service/contact.service";
import {DialogService} from "../service/dialog.service";
import {ContactsApiService} from "../service/contacts-api.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[];

  constructor(private router: Router, private contactService: ContactService, private dialogService: DialogService) {
  }

  addContact(contact: Observable<Contact>): void {
    let input = this.dialogService.contactDialog();
    input.subscribe(result => {
      if (result) {
        // this.contactService.addContact(result);
        this.contactService.saveContacts(result).subscribe(response  =>
          this.findContacts());
      }
    });
  }
    editContact(contact: Contact): void {
    let input = this.dialogService.contactDialog(contact);
    input.subscribe(result => {
      if (result) {
        // this.contactService.updateContact(result);
        this.contactService.saveContacts(result).subscribe(result =>
          this.findContacts());
      }
    });
  }
  contactMap(contact: Contact){
    let address = contact.streetAddress + ', ' + contact.postalCode + ' ' + contact.city;
    this.dialogService.mapDialog(address);
  }

  deleteContact(contact: Contact): void {
    this.contactService.deleteContact(contact).subscribe(result =>
    this.findContacts());
  }

  findContacts() {
    // this.contactService.findContacts().subscribe(contacts => this.contacts);
    this.contactService.findContacts().subscribe(contacts => {this.contacts = contacts;
    });
  }
  ngOnInit(): void {
    this.findContacts();
  }
}
