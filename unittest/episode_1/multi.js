function square(x) {
    return x * x;
}

const tests = [
    [1, 1],
    [2, 4],
    [3, 9],
    [4, 16],
];

QUnit.module('multi', function () {
    QUnit.test.each('square()', tests, function (assert, [value, expected]) {
        const result = square(value);
        assert.equal(result, expected, `${value} squared`);
    });
});
