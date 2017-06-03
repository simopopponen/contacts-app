import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../user";
import {UserService} from "../services/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private router: Router, private UserService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    this.user = new User();
  }

  login() {
    console.log('Logged in as: ' + this.user.userName);
    this.UserService.login(this.user.userName, this.user.password).subscribe(result => {
      let user = new User(result.json().userName, result.json().password, result.json().firstName, result.json().lastName, result.json().email);
      console.log(result.json());
      this.UserService.saveUser(user);
      this.router.navigate(['/contact']);
    });
  }
}

