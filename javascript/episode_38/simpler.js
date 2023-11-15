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

class triangle extends Shape {
    constructor(params) {
        super(params);
    }

    circumference(a, b, c) {
        return a + b + c;
    }
}

function shapeFactory({ type, ...rest }) {
    const types = {
        circle: params => new Circle(params),
        square: params => new Square(params),
        triangle: params => new triangle(params),
    };

    return types[type](rest);
}

const shapes = [];

const shape1 = shapeFactory({ type: 'circle', color: 'red' });
const shape2 = shapeFactory({ type: 'square', color: 'green' });
const shape3 = shapeFactory({ type: 'triangle', color: 'blue' });

shapes.push(shape1, shape2, shape3);

shapes.forEach(s => console.log(s + ''));
