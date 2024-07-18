const fn = nList =>
    [...nList].map(i =>
        isNaN(parseInt(i.innerText))
            ? i.innerText
            : parseInt(i.innerText) % 2 === 0
            ? i.innerText * 2
            : i.innerText * 3,
    );
