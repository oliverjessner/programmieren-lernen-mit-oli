var a: any = [1, 5, 3, 2, 4];

function buggy_function(inhalte: any[]): any[] {
    if (inhalte.length <= 1) {
        return inhalte;
    }

    const zufallsDings = Math.floor(Math.random() * inhalte.length);
    const bruh = inhalte[zufallsDings];

    var zuWenig = [];
    var ichWeißNichtBruder = [];
    var zuGross = [];

    for (var schleifenDings = 0; schleifenDings < inhalte.length; schleifenDings++) {
        if (inhalte[schleifenDings] < bruh) {
            zuWenig.push(inhalte[schleifenDings]);
        } else if (inhalte[schleifenDings] === bruh) {
            ichWeißNichtBruder.push(inhalte[schleifenDings]);
        } else {
            zuGross.push(inhalte[schleifenDings]);
        }
    }

    return [...buggy_function(zuWenig), ...ichWeißNichtBruder, ...buggy_function(zuGross)];
}

buggy_function(a);
