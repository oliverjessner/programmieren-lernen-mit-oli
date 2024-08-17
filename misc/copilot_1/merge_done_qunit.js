/**
 * Merges two objects into one.
 * @param {Object} a - The first object.
 * @param {Object} b - The second object.
 * @returns {Object} - The merged object.
 * @throws {TypeError} - If either argument is not an object.
 */
function merge(a, b) {
    if (typeof a !== 'object' || a === null) {
        throw new TypeError('First argument must be an object');
    }
    if (typeof b !== 'object' || b === null) {
        throw new TypeError('Second argument must be an object');
    }
    return {
        ...a,
        ...b,
    };
}

QUnit.module('merge', function () {
    QUnit.test('merge two objects', function (assert) {
        const obj = merge({ a: 1 }, { b: 2 });
        assert.deepEqual(obj, { a: 1, b: 2 }, 'Objects should be merged correctly');
    });

    QUnit.test('merge with overlapping keys', function (assert) {
        const obj = merge({ a: 1 }, { a: 2, b: 3 });
        assert.deepEqual(obj, { a: 2, b: 3 }, 'Overlapping keys should be overwritten');
    });

    QUnit.test('merge with invalid first argument', function (assert) {
        assert.throws(() => merge(null, { a: 1 }), TypeError, 'First argument must be an object');
    });

    QUnit.test('merge with invalid second argument', function (assert) {
        assert.throws(() => merge({ a: 1 }, null), TypeError, 'Second argument must be an object');
    });

    QUnit.test('merge with empty object', function (assert) {
        const obj = merge({}, { a: 1 });
        assert.deepEqual(obj, { a: 1 }, 'Merging with an empty object should return the other object');
    });

    QUnit.test('merge with both empty objects', function (assert) {
        const obj = merge({}, {});
        assert.deepEqual(obj, {}, 'Merging two empty objects should return an empty object');
    });
});

QUnit.log(function (details) {
    console.log(`Log: ${details.result}, ${details.message}`);
});
QUnit.done(function (details) {
    console.log(
        'Total: ' +
            details.total +
            ' Failed: ' +
            details.failed +
            ' Passed: ' +
            details.passed +
            ' Runtime: ' +
            details.runtime,
    );
});
