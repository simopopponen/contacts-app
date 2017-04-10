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

  constructor(public dialog: MdDialogRef<ContactdialogComponent>) {
  }


  saveContact() {
    console.log(this.contact);
    this.dialog.close(this.contact);

  }

  ngOnInit() {
    if (!this.contact) {
      this.contact = new Contact();
    }
  }
}
