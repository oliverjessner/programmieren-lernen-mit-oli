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
        if (!this.address) {
            throw new Error('No address was passed to the builder, call setAddress');
        }
        if (!this.color) {
            throw new Error('No color was passed to the builder, call setColor');
        }
        if (!this.price) {
            throw new Error('No price was passed to the builder, call setPrice');
        }

        return new House(this.address, this.color, this.price);
    }
}

const houseBuilder = new HouseBuilder();
const house = houseBuilder.setAddress('MaxMuster Straße').setPrice(1_000_000).build();

console.log(house);
