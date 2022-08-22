const cat = 'fiona';
const food = 'pizza'; 
const human = 'berni'; 
const itsAPizza = food === 'pizza';
const nameIsOli = human === 'oli';
const catNameIsFiona = cat === 'fiona';

if (catNameIsFiona && nameIsOli || itsAPizza) {
    console.log('Its oli');
}
