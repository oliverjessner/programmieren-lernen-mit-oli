function add(a, b) {
    return a + b;
}

QUnit.module('add', function () {
    QUnit.test('sum of two numbers', function (assert) {
        const sum = add(1, 2);
        assert.equal(sum, 3, 'Simple addition, my boy');
    });

    QUnit.test('concat strings', function (assert) {
        const str = add('Hallo', ' Welt');
        assert.equal(str, 'Hallo Welt');
    });
});
