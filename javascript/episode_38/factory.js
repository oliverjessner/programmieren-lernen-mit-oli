class Shape {
    constructor({ color }) {
        this.color = color;
    }

    toString() {
        return `My color is ${this.color}`;
    }
}

class Circle extends Shape {
    constructor(params) {
        super(params);
    }

    circumference(r) {
        return 2 * Math.PI * r;
    }
}

class Square extends Shape {
    constructor(params) {
        super(params);
    }

    circumference(a) {
        return a * 4;
    }
}

class Triangle extends Shape {
    constructor(params) {
        super(params);
    }

    circumference(a, b, c) {
        return a + b + c;
    }
}

class ShapeFactory {
    #types = {
        circle: params => new Circle(params),
        square: params => new Square(params),
        triangle: params => new Triangle(params),
    };

    createShape({ type, ...rest }) {
        return this.#types[type](rest);
    }
}

const factory = new ShapeFactory();
const shape1 = factory.createShape({ type: 'circle', color: 'red' });
const shape2 = factory.createShape({ type: 'triangle', color: 'blue' });
const shape3 = factory.createShape({ type: 'square', color: 'green' });

console.log(shape1, shape2, shape3);
