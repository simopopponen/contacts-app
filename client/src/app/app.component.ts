import { Component } from '@angular/core';
import {MapdialogComponent} from "./contactdialogs/mapdialog/mapdialog.component";
import {ContactService} from "./service/contact.service";
import {Contact} from "./contact";
import {DialogService} from "./service/dialog.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contacts App';

  contacts: Contact[];

  constructor(public dialogService: DialogService, public contactService: ContactService) {

    this.contacts = contactService.findContacts();
  }

  addContact() {
    this.dialogService.contactDialog();
  }

  contactMap(contact: Contact){
    let address = contact.streetAddress + ', ' + contact.city;
    this.dialogService.mapDialog(address);
  }


  //Call functions here for add, get and delete contacts
}
