function zigzag(s, rows) {
    const zigZagRows = new Array(rows).fill().map(() => []); // [[], [], [], []]
    let idx = 0;
    let d = 1;

    for (const char of s) {
        zigZagRows[idx].push(char);

        if (idx === 0) {
            d = 1;
        } else if (idx === rows - 1) {
            d = -1;
        }

        idx += d;
    }

    return zigZagRows.reduce((acc, row) => acc + row.join(''), '');
}

console.log(zigzag('HELLO', 3));
console.log(zigzag('PAYPALISHIRING', 4));
