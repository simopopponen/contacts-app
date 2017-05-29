import {Injectable} from '@angular/core';
import {Response} from "@angular/http";
import {environment} from "../../../environments/environment";
import {HttpService} from "app/service/http.service";


@Injectable()
export class AuthenticationService {

  private url: string = environment.endPointUrl + '/authentication';

  constructor(private http: HttpService) {
  }

  authenticate(username: string, password: string) {
    return this.http.post(this.url, {
      username: username,
      password: password
    }).map((response: Response) => {
      let data = response.json();
      this.http.saveToken(data.token);
      return data.userId;
    });
  }
}
