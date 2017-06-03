import {Injectable} from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {UserApiService} from "./user-api.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {User} from "../user";

@Injectable()
export class UserService {

  constructor(private auth: AuthenticationService, private userApiService: UserApiService) {
  }

  login(userName: string, password: string) {
    if (environment.endPointUrl) {
      return this.auth.authenticate(userName, password).flatMap(() => {
        return this.userApiService.login();
      });
    } else {
      return Observable.of(null);
    }
  }
  saveUser(user: User) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getUser(){
    return JSON.parse(sessionStorage.getItem('user'));
  }
}
