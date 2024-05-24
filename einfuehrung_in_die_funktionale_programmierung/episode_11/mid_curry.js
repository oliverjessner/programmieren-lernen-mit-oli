function add(x) {
    return function (y) {
        return x + y;
    };
}

const subtotal = add(3);
const total = subtotal(4);

console.log(total);
