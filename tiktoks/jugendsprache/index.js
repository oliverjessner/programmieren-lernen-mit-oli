const [args] = process.argv.slice(2);
const words = args.split(' ');
const jugendsprache = {
    komischer: 'goofy',
    Freund: 'Diggah',
    Chef: 'Babo',
    'Sich etwas gönnen': 'Gönnung',
    charmante: 'Rizz',
    aufzureißen: 'rizzen',
    'ich verstehe dich': 'type shii',
    '?': 'geyoughurted',
    'unwichtige Menschen': 'NPC',
    eigenartigen: 'sus',
};

const newWords = words
    .map(word => {
        return jugendsprache[word] || word;
    })
    .join(' ');

console.log();
console.log(newWords);
