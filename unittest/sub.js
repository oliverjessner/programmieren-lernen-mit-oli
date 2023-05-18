function subtract(a, b) {
    return a - b;
}

QUnit.module('subtract', function () {
    QUnit.test('subtrahend of two numbers', function (assert) {
        const sub = subtract(1, 2);
        assert.equal(sub, -1);
    });
});
