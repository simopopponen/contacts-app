import { Component } from '@angular/core';
import {DialogService} from "./service/dialog.service";
import {MdDialog} from "@angular/material";
import {ContactdialogComponent} from "app/contactdialogs/contactdialog/contactdialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(public contactDialog: MdDialog){
    // contactDialog.mapDialog('Kotipellonkatu 9 53850 Lappeenranta')
      }
  addContact(){
    this.contactDialog.open(ContactdialogComponent);
  }


}
