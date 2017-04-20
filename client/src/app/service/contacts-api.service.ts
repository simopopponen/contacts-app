import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Contact} from '../contact';

@Injectable()
export class ContactsApiService {

  constructor(private http: Http) { }

  findContacts(){
    let url = 'http://localhost:49925/api/contacts';
    return  this.http.get(url).map(response => response.json() as Contact[]);
  }

}
