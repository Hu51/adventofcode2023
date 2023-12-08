// read lines form file

const fs = require('fs');

const lines = fs.readFileSync('./data/day1.txt', 'utf8').split('\n');
let all = 0;
lines.forEach((line) => {
    let nums = line.replace(/[\D]/g, '').split('');

    let num = parseInt(nums[0]) *10 + parseInt(nums[nums.length-1   ]);
    all += num;
    console.log(num);
});

console.log(all);

