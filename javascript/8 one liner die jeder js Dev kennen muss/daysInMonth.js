const daysInMonth = (month, year) => new Date(year, month, 0).getDate()

console.log(daysInMonth(11, 2022))