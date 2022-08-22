const temp = [
    ['12:00', '13:00', '14:00'], // value
    [32, 30, 29],                // day 1
    [29.5, 30, 29],              // day 2
    [28.5, 29, 29],              // day 3
];

function getTempAtDayAndTime (day, time) {
    if (temp.length <= day) {
        return console.log('Not enough days stored yet');
    }

    const timeIndex = temp[0].indexOf(time);
    return temp[day][timeIndex];
}

const lookingForTemp = getTempAtDayAndTime(1, '14:00');
    
console.log(lookingForTemp); 