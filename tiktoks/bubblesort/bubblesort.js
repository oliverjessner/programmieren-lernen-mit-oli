const arr = [69, 1337, 42, 666, 420, 3.14];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];

                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubbleSort(arr);
console.log(arr);
