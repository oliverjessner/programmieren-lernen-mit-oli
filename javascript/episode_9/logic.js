const temps = [32.5, 31, 34, 29.4];
const temps2 = [35, 29, 24, 30.4];
const ftemps = temps.filter(function (temp) {
    return temp > 30;
}).map(function mapFunction (temp) {
    return temp * 1.8 + 32 + ' °F';
});

console.log(ftemps);

