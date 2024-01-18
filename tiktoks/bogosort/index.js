function bogosort(arr) {
    let count = arr.length;
    let index = 0;

    while (count > 0) {
        index = Math.floor(Math.random() * count);
        count--;

        [arr[count], arr[index]] = [arr[index], arr[count]];
    }

    return arr;
}

function bogoUntilTheWorldEnds(arr) {
    const sorted = structuredClone(arr).sort();
    let bogoSorted = bogosort(arr);
    let count = 0;

    while (!isSorted(bogoSorted, sorted)) {
        count++;
        bogoSorted = bogosort(arr);
    }

    console.log(count);
    return bogoSorted;
}

function isSorted(arr, sorted) {
    return JSON.stringify(arr) === JSON.stringify(sorted);
}

console.log(bogoUntilTheWorldEnds([1, 3, 2, 2, 5, 6]));
//console.log(bogoUntilTheWorldEnds([1, 3, 2, 4, 5, 9, 4, 9, 1, 9, 9]));
