import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapdialog',
  templateUrl: './mapdialog.component.html',
  styleUrls: ['./mapdialog.component.css']
})
export class MapdialogComponent implements OnInit {

  constructor() { }

  public mapDialog(address: string)
  {
    this.mapDialog('Koti') ;
  }
  ngOnInit() {
  }

}
