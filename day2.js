const fs = require('fs');

const lines = fs.readFileSync('./data/day2.txt', 'utf8').trim().split('\n')

const games = lines.map((line) => {
    [id, data] = line.split(':');
    id = id.split(' ')[1];

    if (!id || !data) {
        return;
    }

    data = data.split(';');

    all_possible = 0;
    data = data.map((bucket) => {      
        let dices = bucket.split(',');

        let types = dices.map((dice) => {
            let [count, color] = dice.trim().split(' ');

            let possible = true;
            if (count > 12 && color == "red") {
                possible = false;
            }

            if (count > 13 && color == "green") {
                possible = false;
            }
            
            if (count > 14 && color == "blue") {
                possible = false;
            }  
            
            if (possible) all_possible++;
            
            return {
                count: parseInt(count), 
                color: color,
                possible: possible
            };
        });

        return types;
    });   


    return {
        id: id.trim(),
        data: {...data},
        all_possible: all_possible,
    };
});


let gamesOk = games.map((game) => {   
    if (!game.id) {
        return null;
    }    
    return game.all_possible;
});

console.log(gamesOk.length);