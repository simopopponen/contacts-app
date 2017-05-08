import {ContactAddressPipe} from './contact-address.pipe';
import {Contact} from '../../contact';

describe('ContactAddressPipe', () => {

  const pipe = new ContactAddressPipe();
  it('should return streetAddress, postalCode and City', () => {
    const contact = new Contact('Matti', 'Mikkonen', '0451234567', 'Kelotie 4', 'Lappeenranta', '53100', 1);
    expect(pipe.transform(contact)).toBe(contact.streetAddress + ', ' + contact.postalCode + ', ' + contact.city);
  });

  it('should return streetAddress', () => {
    let contact = new Contact("Matti", "Mikkonen", "0451234567", "Kelotie 4", "", "", 1);
    expect(pipe.transform(contact)).toBe(contact.streetAddress);
    contact.city = null;
    expect(pipe.transform(contact)).toBe(contact.streetAddress);
  });

  it('should return City', () => {
    let contact = new Contact("Matti", "Mikkonen", "0451234567", "", "Lappeenranta", "", 1);
    expect(pipe.transform(contact)).toBe(contact.city);
    contact.postalCode = null;
    contact.streetAddress = null;
    expect(pipe.transform(contact)).toBe(contact.city);
  });

  it('should return empty string', () => {
    let contact = new Contact("Matti", "Mikkonen", "0451234567", "", "", "", 1);
    expect(pipe.transform(contact)).toBe('');
  });
});
