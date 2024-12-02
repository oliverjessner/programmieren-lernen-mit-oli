class Order {
    Order(street, city) {
        this.street = street;
        this.city = city;
    }

    printShippingLabel() {
        console.log(street + ', ' + city);
    }
}

class Customer {
    Customer(street, city) {
        this.street = street;
        this.city = city;
    }

    printAddress() {
        console.log(street + ', ' + city);
    }
}
