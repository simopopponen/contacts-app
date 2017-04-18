import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "../../contact";

@Pipe({
  name: 'contactAddress'
})
export class ContactAddressPipe implements PipeTransform {

  transform(contact: Contact, args?: any): any {
    return contact.streetAddress + ', ' + contact.postalCode + ' ' + contact.city;
  }

}
