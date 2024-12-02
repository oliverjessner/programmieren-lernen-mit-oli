class Address {
    Address(street, city) {
        this.street = street;
        this.city = city;
    }

    getFullAddress() {
        return street + ', ' + city;
    }
}

class Order {
    Order(address) {
        this.address = address;
    }

    printShippingLabel() {
        console.log(address.getFullAddress());
    }
}
