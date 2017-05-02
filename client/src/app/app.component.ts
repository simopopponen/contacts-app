import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'Contacts App';
  toolbarDisabled: boolean;
  sidenavMode: string;

  constructor(private router: Router) {
    this.toolbarDisabled = false;
    this.sidenavMode = 'over'
  }

  ngOnInit(): void {
    // console.log(this.sidenav);
    // this.onWindowResize(null);
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (_.isEqual(event.urlAfterRedirects, '/') || _.isEqual(event.urlAfterRedirects, '/login')) {
            this.toolbarDisabled = true;
            return;
          }
          this.toolbarDisabled = false;
        }
      });
  }
}
