export class Contact {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  streetAddress: string;
  postalCode: string;
  city: string;

  constructor(firstName?: string, lastName?: string, phone?: string, streetAddress?: string, city?: string, postalCode?: string, id?: string) {
    this.id = id ? id : ''; // : Date.now().toString();
    this.firstName = firstName ? firstName : '';
    this.lastName = lastName ? lastName : '';
    this.phone = phone ? phone : '';
    this.streetAddress = streetAddress ? streetAddress : '';
    this.postalCode = postalCode ? postalCode : '';
    this.city = city ? city : '';
  }
}
