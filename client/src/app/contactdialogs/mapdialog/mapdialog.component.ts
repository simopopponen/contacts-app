import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-mapdialog',
  templateUrl: './mapdialog.component.html',
  styleUrls: ['./mapdialog.component.css']
})
export class MapdialogComponent implements OnInit {

  address: string;
  mapUrl: string;

  constructor(public dialog: MdDialogRef<MapdialogComponent>, private sanitizer: DomSanitizer) { }

  closeMap() {
    this.dialog.close();
  }

  getMapSrc(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.mapUrl = 'http://www.google.com/maps?output=embed&q=' + this.address;
  }
}
