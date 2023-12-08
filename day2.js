// read lines form file

const fs = require('fs');
const lines = fs.readFileSync('./data.txt', 'utf8').split('\n');

let all = 0;
const validDigits = ',one,two,three,four,five,six,seven,eight,nine'.split(',');
validDigitsJoined = validDigits.join('|');
lines.forEach((line, index) => {
    let nums = Array.from(line.matchAll('/' + validDigitsJoined + '/g'));

    if (nums.length >= 2) {
        let numlist = nums.map((key) => key[0]);

        let numFirst = validDigits.indexOf(numlist[0]);
        let numLast = validDigits.indexOf(numlist[nums.length - 1]);

        let num = parseInt(numFirst.toString() + numLast.toString());
        all += num;
        console.log(index + 1, numlist, num, all);
    }
});

console.log(all);

