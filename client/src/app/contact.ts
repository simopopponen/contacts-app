export class Contact {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  streetAddress: string;
  postalCode: string;
  city: string;

  constructor(firstName?: string, lastName?: string, phone?: string, streetAddress?: string, city?: string, postalCode?: string, id?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.streetAddress = streetAddress;
    this.postalCode = postalCode;
    this.city = city;
  }
}
