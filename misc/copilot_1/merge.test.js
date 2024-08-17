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

describe('merge', () => {
    test('merge two objects', () => {
        const obj = merge({ a: 1 }, { b: 2 });
        expect(obj).toEqual({ a: 1, b: 2 });
    });

    test('merge with overlapping keys', () => {
        const obj = merge({ a: 1 }, { a: 2, b: 3 });
        expect(obj).toEqual({ a: 2, b: 3 });
    });

    test('merge with invalid first argument', () => {
        expect(() => merge(null, { a: 1 })).toThrow(TypeError);
    });

    test('merge with invalid second argument', () => {
        expect(() => merge({ a: 1 }, null)).toThrow(TypeError);
    });

    test('merge with empty object', () => {
        const obj = merge({}, { a: 1 });
        expect(obj).toEqual({ a: 1 });
    });

    test('merge with both empty objects', () => {
        const obj = merge({}, {});
        expect(obj).toEqual({});
    });
});

afterEach(() => {
    console.log('Test completed');
});

afterAll(() => {
    console.log('All tests completed');
});
