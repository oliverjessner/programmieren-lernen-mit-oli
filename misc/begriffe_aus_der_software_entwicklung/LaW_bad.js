class Address {
    constructor(street, city, zip) {
        this.street = street;
        this.city = city;
        this.zip = zip;
    }
}

class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(person) {
        this.contacts.push(person);
    }

    getContactInfo(index) {
        const contact = this.contacts[index];
        return `${contact.name} lives at ${contact.address.street}, ${contact.address.city}, ${contact.address.zip}`;
    }
}

const address = new Address('Musterstraße 1', 'Musterstadt', '12345');
const person = new Person('Max Mustermann', address);
const addressBook = new AddressBook();
addressBook.addContact(person);

console.log(addressBook.getContactInfo(0));
