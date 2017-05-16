import {inject, TestBed} from '@angular/core/testing';

import {LocalStorageService} from './local-storage.service';
import {Contact} from "app/contact";
import * as _ from "lodash";

describe('ContactLocalStorageService', () => {

  let localStorageKey = 'contacts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
  });

  // Local Storage Mock
  beforeEach(() => {
    let store = {};

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    });

    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      return store[key] = value;
    });

  });

  function contactArray() {
    return [
      new Contact('First', 'LastName', '1234567', 'streetAddress', 'City', '12345', 1),
      new Contact('Second', 'LastName', '1234567', 'streetAddress', 'City', '12345', 2),
      new Contact('Third', 'LastName', '1234567', 'streetAddress', 'City', '12345', 3)
    ];
  }

  it('Should initialize local storage', inject([LocalStorageService], (service: LocalStorageService) => {
    let data = localStorage.getItem(localStorageKey);
    expect(JSON.parse(data)).toEqual([]);
  }));

  it('#findContacts Should return all contacts from local storage', inject([LocalStorageService], (service: LocalStorageService) => {
    let contacts = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    let contactIds = _.map(contacts, 'id');
    service.findContacts().subscribe((contacts: Contact[]) => {
      expect(contacts.length).toBe(3);
      _.forEach(contacts, function (c) {
        expect(contactIds).toContain(c.id);
      });
    });

  }));

  it('#deleteContacts Should delete one contact by id in local storage', inject([LocalStorageService], (service: LocalStorageService) => {
    let contacts = contactArray();
    let contact = contacts[1];
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));

    service.deleteContact(contact).subscribe((contacts: Contact[]) => {

      _.forEach(contacts, function () {
        expect(contacts.length).toBe(2);
      });
    });
  }));

  it('#saveContact should save contact', inject([LocalStorageService], (service: LocalStorageService) => {

    let contacts = contactArray();
    let contact = new Contact('Fourth', 'LastName', '1234567', 'streetAddress', 'City', '12345', 4)
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));

    service.saveContacts(contact).subscribe((contacts: Contact[]) => {

      _.forEach(contacts, function () {
        expect(contacts.length).toBe(4);

      });
    });
  }));





});
