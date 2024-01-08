const a = [];

for (let i = 0; i < 5; i++) {
    a[i] = function () {
        console.log(i);
    };
}

a.forEach(fn => fn());
