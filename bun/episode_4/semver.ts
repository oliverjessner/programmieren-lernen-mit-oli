import { semver } from 'bun';

console.log(semver.satisfies('1.0.0', '^1.0.0'));
console.log(semver.satisfies('1.0.0', '^2.0.0'));

const versions = ['1.1.0', '0.0.1', '2.0.0', '1.0.0'];
versions.sort(semver.order);

console.log(versions);

console.log(semver.order('0.0.1', '1.1.0'));
console.log(semver.order('1.1.0', '1.1.0'));
console.log(semver.order('1.1.0', '0.0.1'));
