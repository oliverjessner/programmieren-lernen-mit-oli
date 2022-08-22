let counter = 0;

function rec () {
    counter = counter + 1; 

    console.log(counter);

    if (counter === 10) {
        return; // end rekursion
    }

    return rec();
}

rec();