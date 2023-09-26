import pkg from './package.json';
import { test, expect } from 'bun:test';

const propNames: string[] = ['name', 'module', 'devDependencies', 'type'];

test('Has the following names', function () {
    propNames.forEach(function (name) {
        expect(pkg.hasOwnProperty(name)).toBe(true);
    });
});
