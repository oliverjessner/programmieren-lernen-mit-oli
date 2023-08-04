function merge(a, b) {
    return {
        ...a,
        ...b,
    };
}

QUnit.module('merge', function () {
    QUnit.test('merge two objects', function (assert) {
        const obj = merge(
            {
                a: 1,
            },
            {
                b: 2,
            },
        );
        const obj2 = {
            a: 1,
            b: 2,
        };

        assert.deepEqual(obj, obj2);
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
