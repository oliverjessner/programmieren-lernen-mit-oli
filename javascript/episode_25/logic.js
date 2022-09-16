'use strict';
const age = 13;
const readableAgeLevel = age < 18 ? 'minderjährig' : 
                         age > 50 ? 'boomer' : 'non boomer';


console.log(readableAgeLevel);