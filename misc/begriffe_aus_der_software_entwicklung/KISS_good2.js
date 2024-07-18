function addValues(nList) {
    const arrayOfNodes = [...nList];

    return arrayOfNodes.map(function (node) {
        const value = parseInt(node.innerText);

        if (isNaN(value)) {
            return value;
        }

        return value % 2 === 0 ? value * 2 : value * 3;
    });
}
