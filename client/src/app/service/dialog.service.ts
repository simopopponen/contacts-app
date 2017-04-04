import { Injectable } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {ContactdialogComponent} from '../contactdialogs/contactdialog/contactdialog.component';
import {MapdialogComponent} from '../contactdialogs/mapdialog/mapdialog.component';

@Injectable()
export class DialogService {

  constructor(private dialog: MdDialog) { }

  // public contactDialog(contact?: Contact){
  public contactDialog() {
    this.dialog.open(ContactdialogComponent);
    // dialogRef.componentInstance.contact = contact;
    // return dialogRef.afterClosed();
  }

  public mapDialog(address: string) {
    this.dialog.open(MapdialogComponent);
    // dialogRef.componentInstance.address = address;
    // return dialogRef.afterClosed();
  }
}
