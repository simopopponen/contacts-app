export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  streetAddress: string;
  postalCode: string;
  city: string;

  constructor(firstName?: string, lastName?: string, phone?: string, streetAddress?: string, city?: string, postalCode?: string, id?: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.streetAddress = streetAddress;
    this.postalCode = postalCode;
    this.city = city;
  }
}
