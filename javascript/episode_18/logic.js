'use strict';
const car = {
    speed: '100km/h',
    color: 'blue',
    brand: 'tesla',
    owners: ['berni', 'oli', 'igor'],
    drive () { // function in object = method
        console.log(this);
        console.log('driving ' + this.speed);
    },
    getInfo: () => {
        window.alert('Hi');
        console.log(this);
        console.log('its a ' + this.color + ' car from ' + this.brand);
    },
    getAllOwners () {
        const self = this; 
        
        this.owners.forEach(function (owner) {
            console.log(self.brand, owner);
        });
    }
};

//car.drive();
//car.getInfo();
car.getAllOwners();