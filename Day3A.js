const regex = /[^0-9.]/;
let sum = 0;

function findValidNums(gears){
    for (i = 0; i<gears.length; i++){
        //since we don't care about the ".", we can remove them
        const numsOnly = gears[i].replace(/\./g, " ")
        //now we need to make sure the code doesnt break because of index mismatch
        for (const num of numsOnly.matchAll(/\d+/g)) /* we get the numbers*/{
            for (j = num.index; j< num.index + num[0].length; j++)/*will be used to check the up down value{}*/{
                // we will now define an array that ensures surrounding indexes are valid
                edges = [
                    (gears[i-1] ?? "")[j-1] ?? ".",
                    (gears[i-1] ?? "")[j] ?? ".",
                    (gears[i-1] ?? "")[j+1] ?? ".",
                    (gears[i] ?? "")[j-1] ?? ".",
                    (gears[i] ?? "")[j] ?? ".",
                    (gears[i] ?? "")[j+1] ?? ".",
                    (gears[i+1] ?? "")[j-1] ?? ".",
                    (gears[i+1] ?? "")[j] ?? ".",
                    (gears[i+1] ?? "")[j+1] ?? ".",
                ]
                if (edges.some(x => /[^0-9.]/.test(x))){
                    sum += parseInt(num[0])
                    break
                };

            };
        }; 
    };
    
    return sum;
};

const fs = require("fs");
const path = require("path");
const gears = fs.readFileSync(path.resolve(__dirname, "inputDay3.txt"), "utf8").split("\n");

console.log(findValidNums(gears));