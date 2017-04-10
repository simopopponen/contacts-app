import {Injectable} from '@angular/core';
import {Contact} from "../contact";

@Injectable()
export class ContactService {

  private contacts: Contact[];


  constructor() {
    this.contacts = [
      new Contact(0,"Simo", "Pöppönen", "0401234567", "Kotipellonkatu 9", "53850", "Lappeenranta"),
      new Contact(1,"Aleksi", "Pöppönen", "0402234567", "Kotipellonkatu 9", "53850", "Lappeenranta"),
      new Contact(2,"Erkki", "Erämies", "0403234567", "Tuomaankatu 4", "55100", "Imatra")
    ]
  }

  findContacts() : Contact[]{
    return this.contacts;
  }

}
