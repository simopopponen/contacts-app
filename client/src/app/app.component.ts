import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import * as _ from 'lodash';
import {UserService} from "./user/services/user.service";
import {User} from "./user/user";
import {HttpService} from "./service/http.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {

  title = 'Contacts App';
  sidenavMode: string;
  toolbarDisabler: boolean;
  user: User;

 // @ViewChild('sidenav') sideNavigation: MdSidenav;

 // @HostListener('window:resize', ['$event'])

  onResize(event) {
    let width = event ? event.target.innerWidth : window.innerWidth;
    this.sidenavMode = width >= 600 ? 'side' : 'over';
  }

  constructor(private router: Router, private userService: UserService) {
    this.sidenavMode = 'over'
    this.toolbarDisabler = false
    this.user = this.userService.getUser();
  }

  //toggleSideNav() {
  //  this.sideNavigation.toggle(this.sideNavigation._isClosed)
  //}

  ngOnInit(): void {
    this.onResize(null);
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (_.isEqual(event.urlAfterRedirects, '/') || _.isEqual(event.urlAfterRedirects, '/user/login')) {
            this.toolbarDisabler = true;
            return;
          }
          this.toolbarDisabler = false;
        }
      });
  }

  navigateToLogin(){
    this.router.navigate([('/user/login')]);
  }

  navigateToContacts(){
    this.router.navigate([('/contact')]);
  }

}
