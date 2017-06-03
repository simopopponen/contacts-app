import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  directToLogin(){
    this.router.navigate([('/user/login')]);
  }
}
