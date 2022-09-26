async function giveMePromise () {
    return new Promise(function (success, reject) {
        setTimeout(function () {
            return success('Done');
        }, 2000);
    });
}

try {
    const data = await giveMePromise();
} catch (e) {
    console.log(e);
} finally {
    console.log('finally');
}
