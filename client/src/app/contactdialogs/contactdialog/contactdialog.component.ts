import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {Contact} from "../../contact";


@Component({
  selector: 'app-contactdialog',
  templateUrl: './contactdialog.component.html',
  styleUrls: ['./contactdialog.component.css']
})
export class ContactdialogComponent implements OnInit {
  contact: Contact;
  editMode: boolean;

  constructor(public dialog: MdDialogRef<ContactdialogComponent>) {
  }
  saveContact() {
    console.log(this.contact);
    let validateInput =  (this.contact.firstName && this.contact.lastName)
    if (validateInput !== '')
    {
      this.dialog.close(this.contact);
    }
  }
  closeDialog() {
    this.dialog.close();
  }

  ngOnInit() {
    this.editMode = true;
    if (!this.contact) {
      this.contact = new Contact();
      this.editMode = false;
    }
  }
}
