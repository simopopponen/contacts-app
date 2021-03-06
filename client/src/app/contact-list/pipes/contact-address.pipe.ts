import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from '../../contact';
import * as _ from 'lodash';

@Pipe({
  name: 'contactAddress'
})
export class ContactAddressPipe implements PipeTransform {


  transform(contact: Contact, args?: any): any {
    if (!contact)return '';

    let address = [contact.streetAddress || null, contact.postalCode || null , contact.city || null];
    address = _.reject(address, _.isNull);
    return address.join(', ');
    // return contact.streetAddress + ', ' + ' ' + contact.city;
  }

}
