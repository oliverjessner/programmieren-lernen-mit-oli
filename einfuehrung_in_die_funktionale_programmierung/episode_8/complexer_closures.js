function buildName(firstName, secondName) {
    const fullname = firstName + ' ' + secondName;
    const intialFirst = firstName.charAt(0);
    const intialSecond = secondName.charAt(0);
    const shortName = intialFirst + intialSecond;
    const sanitizedName =
        intialFirst.toUpperCase() + firstName.slice(1) + ' ' + intialSecond.toUpperCase() + secondName.slice(1);
    let age = 0;

    function setAge(newAge) {
        age = newAge;
    }

    function getAge() {
        return age;
    }

    function getName() {
        return fullname;
    }

    function getSanitizedName() {
        return sanitizedName;
    }

    function getShortName() {
        return shortName;
    }

    return {
        getName,
        getSanitizedName,
        getShortName,
        getAge,
        setAge,
    };
}

const customName = buildName('bill', 'gates');
console.log(customName.getName());
console.log(customName.getSanitizedName());
console.log(customName.getShortName());
