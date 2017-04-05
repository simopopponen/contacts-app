import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-contactdialog',
  templateUrl: './contactdialog.component.html',
  styleUrls: ['./contactdialog.component.css']
})
export class ContactdialogComponent implements OnInit {

  constructor() {}

  saveContact() {
    console.log("Saving....")
  }
    ngOnInit() {
  }

}
