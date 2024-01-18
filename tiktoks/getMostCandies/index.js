function getMostCandies(kids, extraCandies) {
    const mostCandy = Math.max(...kids);

    return kids.map(function (candy) {
        if (candy + extraCandies >= mostCandy) {
            return true;
        }

        return false;
    });
}

console.log(getMostCandies([1, 3, 2], 1));
console.log(getMostCandies([1, 3, 2], 2));
console.log(getMostCandies([5, 2, 1], 1));
console.log(getMostCandies([5, 2, 1], 5));
