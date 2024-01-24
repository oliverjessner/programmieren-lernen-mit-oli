function miracleSort(arr) {
    let sorted = false;

    do {
        sorted = true;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                sorted = false;
                break;
            }
        }
    } while (!sorted);
}

miracleSort([1337, 69, 420, 666]);
