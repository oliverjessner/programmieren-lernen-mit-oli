class House {
    constructor(address, color, price) {
        this.address = address;
        this.color = color;
        this.price = price;
    }
}

class HouseBuilder {
    setAddress(address) {
        this.address = address;
        return this;
    }

    setColor(color) {
        this.color = color;
        return this;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    build() {
        return new House(this.address, this.color, this.price);
    }
}

const houseBuilder = new HouseBuilder();
const house = houseBuilder.setAddress('MaxMuster Straße').setColor('green').setPrice(1_000_000).build();

console.log(house);
